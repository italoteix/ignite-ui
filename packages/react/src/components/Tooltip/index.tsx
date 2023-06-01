import { ComponentProps } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipContainer } from './styles'

import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content?: string
}

export const TooltipProvider = RadixTooltip.Provider

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <TooltipContainer sideOffset={2}>
          <Text size="sm">{content}</Text>
          <RadixTooltip.Arrow />
        </TooltipContainer>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}

Tooltip.displayName = 'Tooltip'
