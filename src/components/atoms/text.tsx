import { getColorVariants, getSpaceVariants, styled } from 'theme'

export const Text = styled('p', {
  display: 'inline-block',
  variants: {
    color: getColorVariants('color'),
    size: {
      sm: {
        lineHeight: '$sm',
        fontSize: '$sm'
      },
      md: {
        lineHeight: '$md',
        fontSize: '$md'
      },
      lg: {
        lineHeight: '$lg',
        fontSize: '$lg'
      }
    },
    fontWeight: {
      regular: {
        fontWeight: '$regular'
      },
      medium: {
        fontWeight: '$medium'
      },
      semiBold: {
        fontWeight: '$semiBold'
      },
      bold: {
        fontWeight: '$bold'
      }
    },
    ...getSpaceVariants()
  },
  defaultVariants: {
    size: 'sm'
  }
})
