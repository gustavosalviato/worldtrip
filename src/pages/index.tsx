import { Header } from '@/components/Header'
import { HomeHero } from '@/components/HomeHero'
import { TravelTypes } from '@/components/TravelTypes'
import { Flex, Box, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperCard } from '@/components/SwiperCard'
import { GetStaticProps } from 'next'
import { createClient } from 'prismicio'
import Head from 'next/head'

interface HomeProps {
  continents: {
    slug: string
    title: string
    subtitle: string
    banner: string
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>WorldTrip | Infinitas possibilidades</title>
      </Head>
      <Flex direction="column" mb="10">
        <Header />

        <HomeHero />

        <Flex w="100%" maxWidth="1440px" mx="auto" direction="column">
          <TravelTypes />

          <Box textAlign="center" pt="8" mt="8">
            <Text fontSize={['3xl', '4xl']}>Vamos nessa?</Text>
            <Text fontSize={['3xl', '4xl']}>Então escolha seu continente</Text>
          </Box>

          <Flex width="100%" maxWidth="1240px" mx="auto" h="450px" mt="56px">
            <Swiper
              slidesPerView={1}
              navigation
              pagination
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              color="yellow.500"
            >
              {continents.map((continent) => {
                return (
                  <SwiperSlide key={continent.slug}>
                    <SwiperCard
                      banner={continent.banner}
                      slug={continent.slug}
                      subtitle={continent.subtitle}
                      title={continent.title}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const continentResponse = await client.getByType('continent')

  const continents = continentResponse.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      subtitle: continent.data.subtitle,
      banner: continent.data.banner.url,
    }
  })

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
