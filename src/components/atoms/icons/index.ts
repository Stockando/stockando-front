import { IconBaseProps } from 'react-icons'
import { ColorNames, theme } from 'theme'

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg'

type Spaces = keyof typeof theme.space

export type IconsProps<T> = IconBaseProps & {
  name: T
  color?: ColorNames
  size?: IconSizes
  onClick?: () => void
  marginLeft?: Spaces
  marginRight?: Spaces
  marginTop?: Spaces
  marginBottom?: Spaces
  marginX?: Spaces
  marginY?: Spaces
  paddingLeft?: Spaces
  paddingRight?: Spaces
  paddingTop?: Spaces
  paddingBottom?: Spaces
  paddingX?: Spaces
  paddingY?: Spaces
}

export const iconSizesMap = new Map<IconSizes, string>([
  ['xs', '12px'],
  ['sm', '16px'],
  ['md', '24px'],
  ['lg', '32px']
])

export const getConfigByProps = <T>({
  onClick,
  color = '$black',
  size = 'md'
}: IconsProps<T>) => {
  const hasOnClick = !!onClick

  const colorKey = color.split('$')[1] as keyof typeof theme.colors
  const themeColor = theme.colors[colorKey] as any

  const iconSize = iconSizesMap.get(size) ?? '16px'

  return {
    hasOnClick,
    themeColor,
    iconSize
  }
}
