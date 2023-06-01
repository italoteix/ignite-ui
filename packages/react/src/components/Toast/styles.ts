import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'
import { Text } from '../Text'

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $5',
  display: 'flex',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  width: '100%',
  maxWidth: '22.5rem',
})

export const CloseButton = styled(Toast.Close, {
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
  marginLeft: 'auto',
  color: '$gray200',
  alignSelf: 'flex-start',
  marginTop: '$2',
  cursor: 'pointer',
  '&:hover': {
    color: '$gray100',
  },
})

export const Title = styled(Text, {
  fontWeight: '$bold',
})

export const Description = styled(Text, {
  color: '$gray200',
  marginTop: '$2',
})

export const Viewport = styled(Toast.Viewport, {
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  gap: '$2',
  width: '29rem',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})
