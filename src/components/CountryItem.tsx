import { Box, Flex, VStack, Text } from '@chakra-ui/react'

interface CountryItemProps {
  country: string
  city: string
  banner: string
}

export function CountryItem({ city, country, banner }: CountryItemProps) {
  return (
    <Box w="100%" overflow="hidden" borderRadius="6px" maxWidth="256px">
      <img
        style={{ height: '150px', width: '100%', objectFit: 'cover' }}
        src={banner}
        alt=""
      />

      <Flex
        p="6"
        bg="gray.50"
        borderBottom="2px solid"
        borderLeft="2px solid"
        borderInline="2px solid"
        borderColor="yellow.500"
        justify="space-between"
        align="center"
      >
        <VStack display="col">
          <Text color="gray.700" fontWeight="semibold" fontSize="xl">
            {city}
          </Text>
          <Text color="gray.400">{country}</Text>
        </VStack>
      </Flex>
    </Box>
  )
}
