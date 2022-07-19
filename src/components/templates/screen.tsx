import { Flex } from 'components/atoms/flex'
import Drawer from 'components/molecules/drawer'
import Header from 'components/molecules/header'
import React, { useState } from 'react'
import { styled } from 'theme'

const Container = styled('div', {
  position: 'relative',
  height: '100vh',
  width: '100%',
  backgroundColor: '$light'
})

const Content = styled(Flex, {
  height: 'calc(100% - 56px)',
  width: '100%',
  '@lg': {
    height: 'calc(100% - 112px)'
  }
})

const Body = styled('div', {
  height: '100%',
  width: '100%',
  overflowY: 'auto',
  padding: '$md'
})

export type ScreenProps = {
  children: React.ReactNode
  headerTitle: string
  leftSlot?: React.ReactNode
}

const Screen = (props: ScreenProps) => {
  const { children, headerTitle, leftSlot } = props
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <Container>
      <Header
        title={headerTitle}
        isOpenMenu={isOpen}
        onMenuClick={() => setIsOpen(oldIsOpen => !oldIsOpen)}
      />
      <Content>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(oldIsOpen => !oldIsOpen)}
        />
        <Body>{children}</Body>
        {leftSlot}
      </Content>
    </Container>
  )
}

export default Screen
