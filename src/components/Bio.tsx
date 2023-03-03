import { Text } from '@chakra-ui/react'

interface BioProps {
  description: string
}

export function Bio({ description }: BioProps) {
  return (
    <Text
      fontSize={['lg', 'xl', '2xl']}
      lineHeight="short"
      textAlign="justify"
      fontWeight="normal"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
