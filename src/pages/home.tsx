import { Button } from 'components/atoms/button'
import { Flex } from 'components/atoms/flex'
import { FaIcon } from 'components/atoms/icons/fa-icons'
import Screen from 'components/templates/screen'
import React from 'react'

const Crud: React.FC = () => {
  return (
    <Screen headerTitle="Home">
      <Flex disposition="fullWidth" justify="right">
        <Button color="lightgray" marginRight="md">
          <FaIcon color="$dark" name="FaFilter" size="xs" marginRight="xs" />
          Filtros
        </Button>
        <Button color="blue">
          <FaIcon
            name="FaPlusCircle"
            color="$white"
            size="xs"
            marginRight="xs"
          />
          Cadastrar
        </Button>
      </Flex>
    </Screen>
  )
}

export default Crud
