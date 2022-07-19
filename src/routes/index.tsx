import React from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

import routes from './config'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Router>
    </BrowserRouter>
  )
}

export default Routes
