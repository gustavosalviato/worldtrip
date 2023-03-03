import { Box, Text } from '@chakra-ui/react'
interface InfoItemProps {
  indicator: number
  text: string
}
export function InfoItem({ indicator, text }: InfoItemProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="strong" color="yellow.500" fontSize={['2xl', '2xl', '3xl']}>
        {indicator}
      </Text>
      <Text fontSize={['lg', 'lg', 'xl']} color="gray.300" fontWeight="bold">
        {text}
      </Text>
    </Box>
  )
}
