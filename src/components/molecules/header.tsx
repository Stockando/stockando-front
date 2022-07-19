import { Flex } from 'components/atoms/flex'
import { Heading } from 'components/atoms/heading'
import { MdIcon } from 'components/atoms/icons/md-icons'
import React from 'react'
import { styled } from 'theme'

const Container = styled(Flex, {
  height: '56px',
  width: '100%',
  backgroundColor: '$white',
  borderBottom: '1px solid',
  borderColor: '$darklight'
})

export type HeaderProps = {
  title?: string
  isOpenMenu?: boolean
  onMenuClick: () => void
}

const Header = (props: HeaderProps) => {
  const { title, onMenuClick, isOpenMenu = false } = props
  return (
    <Container paddingX="md" paddingY="sm" justify="between" shadow="light">
      <Flex>
        <MdIcon
          name={isOpenMenu ? 'MdMenuOpen' : 'MdMenu'}
          size="lg"
          color="$dark"
          onClick={onMenuClick}
        />
        <Heading marginLeft="sm" color="dark">
          {title}
        </Heading>
      </Flex>
    </Container>
  )
}

export default Header
