import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { getSpaceVariants, styled } from 'theme'

import { getConfigByProps, IconsProps } from '.'

export type IconNames = keyof typeof FaIcons

type FaIconsProps = IconsProps<IconNames>

export const FaIcon = ({
  name,
  color,
  size,
  onClick,
  ...iconProps
}: FaIconsProps) => {
  const Icon = FaIcons[name]

  const StyledIcon = styled(Icon, {
    variants: {
      ...getSpaceVariants()
    }
  })

  const { themeColor, hasOnClick, iconSize } = getConfigByProps<IconNames>({
    color,
    size,
    onClick,
    name
  })

  return (
    <StyledIcon
      {...iconProps}
      color={themeColor}
      size={iconSize}
      onClick={onClick}
      cursor={hasOnClick ? 'pointer' : undefined}
    />
  )
}
