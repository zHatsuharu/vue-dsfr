import { mount } from '@vue/test-utils'

import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

describe('DsfrBreadcrumb', () => {
  it('should mount DsfrBreadcrumb with right content', () => {
    // Given
    const secondLinkText = 'Lien 2'
    const currentPageText = 'Lien 3'

    const links = [
      {
        to: '/lien-1',
        text: 'Lien 1',
      },
      {
        to: '/lien-2',
        text: secondLinkText,
      },
      {
        text: currentPageText,
      },
    ]

    // When
    const wrapper = mount(DsfrBreadcrumb, {
      propsData: {
        links,
      },
    })

    const navEl = wrapper.findComponent('[role="navigation"]')
    const currentItemEl = wrapper.findAll('[data-test="lis"]')

    // Then
    expect(navEl.element.tagName).toBe('NAV')
    expect(currentItemEl).toHaveLength(3)
  })
})