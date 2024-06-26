import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import DsfrTile from './DsfrTile.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'One',
      component: { template: '<div />' },
    },
  ],
})

describe('DsfrTile', () => {
  it('should display a vertical tile', async () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://loremflickr.com/80/80/cat?random=1'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { getByText } = render(DsfrTile, {
      global: {
        plugins: [router],
      },
      props: {
        title,
        imgSrc,
        description,
        to: 'https://loremflickr.com/80/80/cat?random=2',
      },
    })

    await router.isReady()

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentElement.parentElement.parentElement.parentElement).not.toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })

  it('should display a horizontal tile', async () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://loremflickr.com/80/80/cat?random=3'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
    const horizontal = true

    const { getByText } = render(DsfrTile, {
      global: {
        plugins: [router],
      },
      props: {
        title,
        imgSrc,
        description,
        horizontal,
        to: 'https://loremflickr.com/80/80/cat?random=4',
      },
    })

    await router.isReady()

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentNode.parentNode.parentNode.parentNode).toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })

  it('should display a tile with a download link', async () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://loremflickr.com/80/80/cat?random=5'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
    const download = true
    const { getByText } = render(DsfrTile, {
      global: {
        plugins: [router],
      },
      props: {
        title,
        imgSrc,
        description,
        download,
        to: 'https://loremflickr.com/80/80/cat?random=6',
      },
    })

    await router.isReady()

    const titleEl = getByText(title)
    expect(titleEl).toHaveAttribute('download', 'true')
  })
})
