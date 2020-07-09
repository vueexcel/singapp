import { render, screen, fireEvent } from '@testing-library/vue'

import Button from "./src/components/common/button.vue";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

test('button value on click', async () => {
  const { getByRole } = await render(Button, {
    propsData: {
      type: 'button',
      clickCall: () => { }
    }
  });

  const button = getByRole('button')
  await fireEvent.click(button)
})


test('submit value on click', async () => {
  const { getByRole } = await render(Button, {
    propsData: {
      type: 'submit',
      clickCall: () => { }
    }
  });

  const button = getByRole('button')
  await fireEvent.click(button)
})

test('submit value on click', async () => {
  const { emitted, getByRole } = await render(Button, {
    propsData: {
      type: 'button'
    }
  });

  const button = getByRole('button')
  await userEvent.click(button)

  expect(emitted().clickCall.length).toBe(1)

})