import React from 'react'
import * as MdIcons from 'react-icons/md'

import { getConfigByProps, IconsProps } from '.'

export type IconNames = keyof typeof MdIcons

type MdIconsProps = IconsProps<IconNames>

export const MdIcon = ({
  name,
  color,
  size,
  onClick,
  ...iconProps
}: MdIconsProps) => {
  const Icon = MdIcons[name]

  const { themeColor, hasOnClick, iconSize } = getConfigByProps<IconNames>({
    color,
    size,
    onClick,
    name
  })

  return (
    <Icon
      {...iconProps}
      color={themeColor}
      size={iconSize}
      onClick={onClick}
      cursor={hasOnClick ? 'pointer' : undefined}
    />
  )
}
