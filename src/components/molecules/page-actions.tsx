import { Button } from 'components/atoms/button'
import { Flex } from 'components/atoms/flex'
import { FaIcon } from 'components/atoms/icons/fa-icons'
import React from 'react'

export type PageActionsProps = {
  onFilter: () => void
  onRegister: () => void
}

const PageActions = (props: PageActionsProps) => {
  const { onFilter, onRegister } = props
  return (
    <Flex disposition="fullWidth" justify="right">
      <Button color="lightgray" marginRight="md" onClick={onFilter}>
        <FaIcon color="$dark" name="FaFilter" size="xs" marginRight="xs" />
        Filtros
      </Button>
      <Button color="blue" onClick={onRegister}>
        <FaIcon name="FaPlusCircle" color="$white" size="xs" marginRight="xs" />
        Cadastrar
      </Button>
    </Flex>
  )
}

export default PageActions
