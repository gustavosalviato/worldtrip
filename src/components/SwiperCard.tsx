import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SwiperCardProps {
  banner: string
  title: string
  subtitle: string
  slug: string
}

export function SwiperCard({ banner, slug, subtitle, title }: SwiperCardProps) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={'center'}
      backgroundImage={`url(${banner})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      objectFit="cover"
    >
      <Link href={`/continent/${slug}`}>
        <Text
          color="yellow.500"
          fontSize={['3xl', '4xl']}
          fontWeight="bold"
          transition="0.3s"
          _hover={{
            filter: 'brightness(0.8)',
            textDecoration: 'underline',
          }}
        >
          {title}
        </Text>
      </Link>
      <Text fontSize={['xl', '2xl']} fontWeight="bold" color="black">
        {subtitle}
      </Text>
    </Box>
  )
}
