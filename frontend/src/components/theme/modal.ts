import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  header: {
    color: 'text.main',
    fontSize: '24px',
    fontWeight: 300,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  body: {
    color: 'text.main',
    py: '16px',
  },
  overlay: {
    bg: 'background.overlay',
  },
  dialog: {
    borderRadius: '8px',
    bg: 'gray.800',
  },
  closeButton: {
    top: '14px',
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})
