import { render } from '@testing-library/vue'

import DsfrInputGroup from './DsfrInputGroup.vue'

describe('DsfrInputGroup', () => {
  it('should render DsfrInputGroup with error message', () => {
    // Given
    const rule = () => {
      return 'message d erreur'
    }
    const rules = [rule]
    const descriptionId = 'my-id'

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        rules,
        descriptionId,
      },
    })

    // Then
    expect(getByTestId(descriptionId)).toHaveTextContent('message d erreur')
  })

  it('should render DsfrInputGroup with valid message', () => {
    // Given
    const validMessage = 'my valid message'
    const descriptionId = 'my-id'
    const valid = true

    // When
    const { getByTestId } = render(DsfrInputGroup, {
      stubs: ['v-icon'],
      props: {
        validMessage,
        descriptionId,
        valid,
      },
    })

    // Then
    expect(getByTestId(descriptionId)).toHaveTextContent(validMessage)
  })
})
