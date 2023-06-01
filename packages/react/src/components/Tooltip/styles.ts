import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: 5,
  backgroundColor: '$gray900',
  fontWeight: '$medium',
})
