import { createStitches, CSS } from '@stitches/react'

import { rgba } from '../utils/colors'
export type {
  CSS,
  VariantProps,
  PropertyValue,
  ScaleValue
} from '@stitches/react'

const lightRGBA = rgba('#151718', 0.1)
const darkRGBA = rgba('#151718', 0.28)
const greenRGBA = rgba('#5CD695', 0.48)
const purpleRGBA = rgba('#6949E9', 0.48)

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      dark: '#151718',
      white: '#FFFFFF',
      light: '#f1f1f1',
      darklight: '#dbdbdb',
      gray: '#BCC3C8',
      darkgrey: '#737373',
      blue: '#0066ff',
      purple: '#6949E9',
      green: '#5CD695',
      red: '#FF3D57',
      orange: '#ff6600',
      yellow: '#FFD700',
      money: '#00cc00',
      success: '#33cc33',
      error: '#cc0000',
      info: '#4da6ff',
      transparentBlack: rgba('#000000', 0.1),
      transparentDark: rgba('#151718', 0.1),
      transparentWhite: rgba('#FFFFFF', 0.1),
      transparentLight: rgba('#f1f1f1', 0.1),
      transparentDarklight: rgba('#dbdbdb', 0.1),
      transparentGray: rgba('#BCC3C8', 0.1),
      transparentDarkgrey: rgba('#737373', 0.1),
      transparentBlue: rgba('#0066ff', 0.1),
      transparentPurple: rgba('#6949E9', 0.1),
      transparentGreen: rgba('#5CD695', 0.1),
      transparentRed: rgba('#FF3D57', 0.1),
      transparentOrange: rgba('#ff6600', 0.1),
      transparentYellow: rgba('#FFD700', 0.1),
      transparentMoney: rgba('#00cc00', 0.1),
      transparentSuccess: rgba('#33cc33', 0.1),
      transparentError: rgba('#cc0000', 0.1),
      transparentInfo: rgba('#4da6ff', 0.1)
    },
    space: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '4rem'
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    fonts: {
      base: 'Roboto, apple-system, sans-serif',
      mono: 'Roboto, menlo, monospace'
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    borderWidths: {
      xs: '1px',
      sm: '2px',
      md: '4px'
    },
    radii: {
      xs: '3px',
      sm: '6px',
      md: '12px',
      pill: '9999px',
      circle: '50%'
    },
    shadows: {
      light: `3px 3px 8px ${lightRGBA}`,
      primary1: `0px 4px 8px ${darkRGBA}`,
      primary2: `0px 8px 24px ${darkRGBA}`,
      primary3: `0px 16px 32px ${darkRGBA}`,
      secondary1: `0px 4px 8px ${greenRGBA}`,
      secondary2: `0px 8px 24px ${greenRGBA}`,
      secondary3: `0px 16px 32px ${greenRGBA}`,
      tertiary1: `0px 4px 8px ${purpleRGBA}`,
      tertiary2: `0px 8px 24px ${purpleRGBA}`,
      tertiary3: `0px 16px 32px ${purpleRGBA}`
    },
    sizes: {},
    lineHeights: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    letterSpacings: {},
    borderStyles: {},
    zIndices: {},
    transitions: {}
  },
  media: {
    sm: '(max-width: 40rem)',
    md: '(max-width: 48rem)',
    lg: '(max-width: 64rem)'
  },
  utils: {
    marginY: (value: Spaces) => ({ marginTop: value, marginBottom: value }),
    marginX: (value: Spaces) => ({ marginLeft: value, marginRight: value }),
    paddingY: (value: Spaces) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    paddingX: (value: Spaces) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    size: (value: any) => ({
      width: value,
      height: value
    }),
    linearGradient: (value: any) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    hover: (styles: CSS) => ({
      '@media (hover: hover)': {
        '&:hover': styles
      }
    })
  }
})

export type Spaces = `$${'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}`

export type FontSizes = `$${keyof typeof theme.fontSizes}`

export type FontWeights = `$${keyof typeof theme.fontWeights}`

export type ColorNames = `$${keyof typeof theme.colors}`

export type BorderWidths = `$${keyof typeof theme.borderWidths}`

export type Radius = `$${keyof typeof theme.radii}`

export type Shadows = `$${keyof typeof theme.shadows}`

type GetColorVariants = {
  [color in keyof typeof theme.colors]?: {
    color?: ColorNames
    backgroundColor?: ColorNames
  }
}

export const getColorVariants = (key: 'color' | 'backgroundColor') => {
  const variants: GetColorVariants = {}

  const colors = Object.keys(theme.colors) as (keyof typeof theme.colors)[]

  colors.forEach(colorKey => {
    const color = `$${colorKey}` as ColorNames
    variants[colorKey] = {
      [key]: color
    }
  })

  return variants
}

type GetShadowVariants = {
  [shadow in keyof typeof theme.shadows]?: {
    boxShadow?: Shadows
  }
}

export const getShadowVariants = () => {
  const variants: GetShadowVariants = {}

  const shadows = Object.keys(theme.shadows) as (keyof typeof theme.shadows)[]

  shadows.forEach(shadowKey => {
    const boxShadow = `$${shadowKey}` as Shadows
    variants[shadowKey] = { boxShadow }
  })

  return variants
}

type GetMarginVariants = {
  [margin in keyof typeof theme.space]?: {
    margin?: Spaces
    marginLeft?: Spaces
    marginRight?: Spaces
    marginTop?: Spaces
    marginBottom?: Spaces
    marginX?: Spaces
    marginY?: Spaces
  }
}

export const getMarginVariants = (
  key:
    | 'margin'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginBottom'
    | 'marginX'
    | 'marginY'
) => {
  const variants: GetMarginVariants = {}

  const spaces = Object.keys(theme.space) as (keyof typeof theme.space)[]

  spaces.forEach(spaceKey => {
    const space = `$${spaceKey}` as Spaces
    variants[spaceKey] = { [key]: space }
  })

  return variants
}

type GetPaddingVariants = {
  [padding in keyof typeof theme.space]?: {
    padding?: Spaces
    paddingLeft?: Spaces
    paddingRight?: Spaces
    paddingTop?: Spaces
    paddingBottom?: Spaces
    paddingX?: Spaces
    paddingY?: Spaces
  }
}

export const getPaddingVariants = (
  key:
    | 'padding'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingX'
    | 'paddingY'
) => {
  const variants: GetPaddingVariants = {}

  const spaces = Object.keys(theme.space) as (keyof typeof theme.space)[]

  spaces.forEach(spaceKey => {
    const space = `$${spaceKey}` as Spaces
    variants[spaceKey] = { [key]: space }
  })

  return variants
}

export const getSpaceVariants = () => {
  return {
    marginLeft: getMarginVariants('marginLeft'),
    marginRight: getMarginVariants('marginRight'),
    marginTop: getMarginVariants('marginTop'),
    marginBottom: getMarginVariants('marginBottom'),
    marginX: getMarginVariants('marginX'),
    marginY: getMarginVariants('marginY'),
    paddingLeft: getPaddingVariants('paddingLeft'),
    paddingRight: getPaddingVariants('paddingRight'),
    paddingTop: getPaddingVariants('paddingTop'),
    paddingBottom: getPaddingVariants('paddingBottom'),
    paddingX: getPaddingVariants('paddingX'),
    paddingY: getPaddingVariants('paddingY')
  }
}

export const getBaseVariants = () => {
  return {
    ...getSpaceVariants(),
    color: getColorVariants('color'),
    backgroundColor: getColorVariants('backgroundColor'),
    shadow: getShadowVariants()
  }
}
