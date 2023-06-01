import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  CloseButton,
  Description,
  Title,
  ToastContainer,
  Viewport,
} from './styles'
import { X } from 'phosphor-react'

export const ToastProvider = RadixToast.Provider

export const ToastViewport = Viewport

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title?: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <div>
        <RadixToast.Title asChild>
          <Title size="xl">{title}</Title>
        </RadixToast.Title>
        <RadixToast.Description asChild>
          <Description size="sm">{description}</Description>
        </RadixToast.Description>
      </div>

      <CloseButton>
        <X />
      </CloseButton>
    </ToastContainer>
  )
}
