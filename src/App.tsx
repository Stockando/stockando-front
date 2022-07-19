import React from 'react'
import Routes from 'routes'
import { globalCss } from 'theme'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontSize: '$md',
    fontFamily: '$base',
    '::-webkit-scrollbar': {
      width: '10px'
    },
    '::-webkit-scrollbar-track': {
      background: '$light'
    },
    '::-webkit-scrollbar-thumb': {
      background: '$gray'
    }
  },
  h1: {
    fontSize: '$lg'
  }
})

function App() {
  globalStyles()

  return <Routes />
}

export default App
