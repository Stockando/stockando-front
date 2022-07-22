import PageActions from 'components/molecules/page-actions'
import Screen from 'components/templates/screen'
import React from 'react'

const Crud: React.FC = () => {
  return (
    <Screen headerTitle="Produto">
      <PageActions onFilter={() => null} onRegister={() => null} />
    </Screen>
  )
}

export default Crud
