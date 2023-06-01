import { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      )
    },
  ],
  args: {
    children: <Button>Hover me</Button>,
    content: 'Some useful help text',
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
