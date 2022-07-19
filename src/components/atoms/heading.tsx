import { getColorVariants, getSpaceVariants, styled } from 'theme'

export const Heading = styled('h1', {
  fontWeight: '$semiBold',
  variants: {
    color: getColorVariants('color'),
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
  }
})
