import { Flex } from '@chakra-ui/react'
import { InfoItem } from './InfoItem'

export function Info() {
  return (
    <Flex justifyContent="center" alignItems="center" gap="10">
      <InfoItem indicator={50} text="Países" />
      <InfoItem indicator={60} text="Línguas" />
      <InfoItem indicator={27} text="Cidades + 100" />
    </Flex>
  )
}
