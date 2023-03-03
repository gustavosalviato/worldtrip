import {
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  Divider,
  Box,
} from '@chakra-ui/react'
import { FaCocktail } from 'react-icons/fa'
import { MdSurfing } from 'react-icons/md'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { ImEarth } from 'react-icons/im'
export function TravelTypes() {
  const isVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box w="100%" justifyContent="center" alignItems="center">
      <Flex
        w="100%"
        justify="center"
        align="center"
        mt="20"
        gap="20"
        px="4"
        flexWrap="wrap"
      >
        <Flex
          direction={isVersion ? 'column' : 'row'}
          gap={['2', '2', '6']}
          align="center"
          justify="center"
        >
          {isVersion ? (
            <Icon as={FaCocktail} fontSize="64" color="yellow.500" />
          ) : (
            <Icon as={VscCircleLargeFilled} fontSize="16" color="yellow.500" />
          )}
          <Text fontWeight="500" color="gray.400" fontSize={['md', 'lg']}>
            Vida noturna
          </Text>
        </Flex>

        <Flex
          direction={isVersion ? 'column' : 'row'}
          gap={['2', '2', '6']}
          align="center"
          justify="center"
        >
          {isVersion ? (
            <Icon as={MdSurfing} fontSize="64" color="yellow.500" />
          ) : (
            <Icon as={VscCircleLargeFilled} fontSize="16" color="yellow.500" />
          )}
          <Text fontWeight="500" color="gray.400" fontSize={['md', 'lg']}>
            Praia
          </Text>
        </Flex>

        <Flex
          direction={isVersion ? 'column' : 'row'}
          gap={['2', '2', '6']}
          align="center"
          justify="center"
        >
          {isVersion ? (
            <Icon
              as={HiOutlineBuildingOffice2}
              fontSize="64"
              color="yellow.500"
            />
          ) : (
            <Icon as={VscCircleLargeFilled} fontSize="16" color="yellow.500" />
          )}
          <Text fontWeight="500" color="gray.400" fontSize={['md', 'lg']}>
            Moderno
          </Text>
        </Flex>

        <Flex
          direction={isVersion ? 'column' : 'row'}
          gap={['2', '2', '6']}
          align="center"
          justify="center"
        >
          {isVersion ? (
            <Icon as={ImEarth} fontSize="64" color="yellow.500" />
          ) : (
            <Icon as={VscCircleLargeFilled} fontSize="16" color="yellow.500" />
          )}
          <Text fontWeight="500" color="gray.400" fontSize={['md', 'lg']}>
            E mais...
          </Text>
        </Flex>
      </Flex>
      <Divider
        orientation="horizontal"
        width="90px"
        pt="8"
        mt="8"
        color="gray.400"
        mx="auto"
      />
    </Box>
  )
}
