import { getBaseVariants, styled } from 'theme'

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    justify: {
      left: {
        justifyContent: 'flex-start'
      },
      right: {
        justifyContent: 'flex-end'
      },
      between: {
        justifyContent: 'space-between'
      },
      around: {
        justifyContent: 'space-around'
      },
      evenly: {
        justifyContent: 'space-evenly'
      }
    },
    align: {
      center: {
        alignItems: 'center'
      },
      left: {
        alignItems: 'flex-start'
      },
      right: {
        alignItems: 'flex-end'
      }
    },
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    gap: {
      none: {},
      xs: {
        gap: '8px'
      },
      sm: {
        gap: '16px'
      },
      md: {
        gap: '24px'
      }
    },
    disposition: {
      none: {},
      fit: {
        width: '100%',
        height: '100%'
      },
      fullHeight: {
        height: '100%'
      },
      fullWidth: {
        width: '100%'
      }
    },
    ...getBaseVariants()
  },
  defaultVariants: {
    justify: 'left',
    align: 'center',
    direction: 'row',
    gap: 'none',
    disposition: 'none'
  }
})
