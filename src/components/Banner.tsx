import { Flex, Text } from '@chakra-ui/react'

interface BannerProps {
  imgUrl: string
  title: string
}

export function Banner({ imgUrl, title }: BannerProps) {
  return (
    <Flex
      h={['240px', '480px']}
      background={`url(${imgUrl})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      p="60px"
      objectFit="cover"
      align={['center', 'flex-end']}
      justify={['center', 'flex-start']}
    >
      <Text fontSize={['4xl', '5xl']} fontWeight="bold">
        {title}
      </Text>
    </Flex>
  )
}
