import { Meta, StoryFn } from '@storybook/react'
import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Appointment created',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

const Template: StoryFn<typeof Toast> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <Toast open={open} onOpenChange={setOpen} {...args} />
      <ToastViewport />
    </ToastProvider>
  )
}

export const Default = Template.bind({})
