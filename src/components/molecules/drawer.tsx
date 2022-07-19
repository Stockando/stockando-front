import { Flex } from 'components/atoms/flex'
import { FaIcon } from 'components/atoms/icons/fa-icons'
import { MdIcon } from 'components/atoms/icons/md-icons'
import { Text } from 'components/atoms/text'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import routes, { Route } from 'routes/config'
import { styled } from 'theme'

const Container = styled(Flex, {
  height: '100%',
  width: '350px',
  overflowY: 'auto',
  backgroundColor: '$white',
  borderRight: '1px solid',
  borderColor: '$darklight',
  '@lg': {
    position: 'absolute',
    left: '0px',
    zIndex: 99999
  }
})

const Backdrop = styled(Flex, {
  overflowY: 'hidden',
  display: 'none',
  '@lg': {
    display: 'block',
    position: 'absolute',
    height: '100vh',
    width: '100%',
    backgroundColor: '$black',
    opacity: 0.4
  }
})

const MenuItem = styled(Flex, {
  cursor: 'pointer',
  hover: {
    background: '$light'
  }
})

const animationShow = {
  display: 'flex'
}

const animationHide = {
  display: 'none'
}

type DrawerProps = {
  isOpen?: boolean
  onClose: () => void
}

const Drawer = ({ isOpen = false, onClose }: DrawerProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const getIcon = (route: Route) => {
    const isActiveRoute = route.path === location.pathname
    const color = isActiveRoute ? '$blue' : '$dark'

    if (route.faIcon) {
      return <FaIcon name={route.faIcon} size="md" color={color} />
    }
    if (route.mdIcon) {
      return <MdIcon name={route.mdIcon} size="md" color={color} />
    }
    return null
  }

  return (
    <>
      <Backdrop
        onClick={onClose}
        style={isOpen ? animationShow : animationHide}
      />
      <Container
        direction="column"
        align="left"
        shadow="light"
        style={isOpen ? animationShow : animationHide}
      >
        {routes.map(route => {
          const isActiveRoute = route.path === location.pathname
          return (
            <MenuItem
              key={route.name}
              disposition="fullWidth"
              paddingY="sm"
              paddingX="md"
              onClick={() => navigate(route.path)}
            >
              {getIcon(route)}
              <Text
                size="md"
                fontWeight="semiBold"
                marginLeft="sm"
                color={isActiveRoute ? 'blue' : 'dark'}
              >
                {route.name}
              </Text>
            </MenuItem>
          )
        })}
      </Container>
    </>
  )
}

export default Drawer
