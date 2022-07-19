import { IconNames as FaIcons } from 'components/atoms/icons/fa-icons'
import { IconNames as MdIcons } from 'components/atoms/icons/md-icons'
import Home from 'pages/home'
import Produto from 'pages/produto'
import React from 'react'

export type Route = {
  name: string
  path: string
  faIcon?: FaIcons
  mdIcon?: MdIcons
  component: React.FC
}

const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    mdIcon: 'MdHome',
    component: Home
  },
  {
    name: 'Produto',
    path: '/produto',
    faIcon: 'FaPeopleCarry',
    component: Produto
  }
]

export default routes
