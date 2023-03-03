import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
export function HomeHero() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  return (
    <Flex
      width="100%"
      mx="auto"
      gap="10"
      mt="6"
      h={['335px']}
      backgroundColor="blue.900"
      p={['6', '6', '10', '20']}
    >
      <Flex direction="column">
        <Text fontSize={['3xl', '4xl']}>
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text fontSize={['md', 'lg']} color="gray.400" mt="5">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Flex>

      {isMobileVersion && (
        <Image
          src="/images/airplane.svg"
          alt="Airplane flying"
          width={400}
          height={335}
          style={{ marginLeft: 'auto' }}
        />
      )}
    </Flex>
  )
}
