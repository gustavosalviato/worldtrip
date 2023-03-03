import { Flex, Text, Link, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft } from 'react-icons/md'
export function Header() {
  const router = useRouter()

  const showHeader = router.pathname !== '/'
  return (
    <Flex
      w="100%"
      maxW={'1440px'}
      py={['13', '25']}
      mx="auto"
      align="center"
      as="header"
      justifyContent={'center'}
      borderBottom="1px solid"
      borderColor="gray.800"
      position="relative"
    >
      {showHeader && (
        <Flex position="absolute" left={['4', '8']} top={['4', '8']}>
          <Link href="/">
            <Icon as={MdKeyboardArrowLeft} fontSize="32" />
          </Link>
        </Flex>
      )}

      <Flex align="center" justify="center" textAlign="center">
        <Text fontSize={['2xl', '3xl']} display="flex">
          World{' '}
          <Text as="span" color="yellow.500" fontWeight="bold">
            Trip
          </Text>
        </Text>
      </Flex>
    </Flex>
  )
}
