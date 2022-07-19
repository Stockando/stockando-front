import { getShadowVariants, getSpaceVariants, styled } from 'theme'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '$sm',
  paddingY: '$sm',
  paddingX: '$md',
  fontSize: '$sm',
  fontWeight: '$semiBold',
  transition: 'ease-in-out 160ms',
  letterSpacing: 0.8,
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer'
  },
  '&:active': {
    opacity: 1,
    filter: 'brightness(84%)'
  },
  variants: {
    color: {
      purple: {
        backgroundColor: '$purple',
        color: 'white'
      },
      green: {
        backgroundColor: '$green',
        color: '$dark'
      },
      red: {
        backgroundColor: '$red',
        color: 'white'
      },
      blue: {
        backgroundColor: '$blue',
        color: 'white'
      },
      lightgray: {
        backgroundColor: '$darklight',
        color: '$dark'
      }
    },
    size: {
      xs: {
        paddingY: '$sm',
        paddingX: '$md',
        fontSize: '$sm'
      },
      md: {
        paddingY: '$sm',
        paddingX: '$md',
        fontSize: '$md'
      },
      lg: {
        paddingY: '$sm',
        paddingX: '$md',
        fontSize: '$lg'
      }
    },
    shadow: getShadowVariants(),
    ...getSpaceVariants()
  },
  defaultVariants: {
    color: 'blue',
    size: 'md'
  }
})
