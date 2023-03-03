import { Banner } from '@/components/Banner'
import { Bio } from '@/components/Bio'
import { CountryItem } from '@/components/CountryItem'
import { Header } from '@/components/Header'
import { Info } from '@/components/Info'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { createClient } from 'prismicio'
import { RichText } from 'prismic-dom'

import Head from 'next/head'

interface IContinent {
  slug: string
  title: string
  subtitle: string
  banner: string
  description: string
}

interface ICountry {
  country: string
  city: string
  banner: string
}

interface ContinentDetailProps {
  continent: IContinent
  countries: ICountry[]
}

export default function ContinentDetail({
  continent,
  countries,
}: ContinentDetailProps) {
  return (
    <>
      <Head>
        <title>WorldTrip | {`${continent?.title}`}</title>
      </Head>
      <Flex direction="column" mb="10">
        <Header />

        <Banner imgUrl={continent?.banner} title={continent?.title} />

        <Flex w="100%" maxWidth="1440px" mx="auto" direction="column" mt="20">
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            justifyContent="center"
            alignItems="center"
            px="8"
            gap={['16px', '70px']}
          >
            <Bio description={continent?.description} />

            <Info />
          </Grid>

          <Heading mt="20" px="8">
            Cidades + 100
          </Heading>

          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={['5', '6', '4', '10']}
            justifyItems="center"
            mt="10"
          >
            {countries?.map((item) => {
              return (
                <CountryItem
                  key={item.city}
                  city={item.city}
                  country={item.country}
                  banner={item.banner}
                />
              )
            })}
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const res = await client.getByType('continent')

  const paths = res.results.map((continent) => {
    return {
      params: {
        slug: continent.uid!,
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const client = createClient({ previewData })

  const slug = params?.slug as string

  const continentResponse = await client.getByUID('continent', slug)

  const continent = {
    slug,
    title: continentResponse.data.title,
    subtitle: continentResponse.data.subtitle,
    description: RichText.asHtml(continentResponse.data.description),
    banner: continentResponse.data.banner.url,
  }

  const countries = continentResponse.data.slices[0].items.map((item: any) => {
    return {
      country: item.country,
      city: item.city,
      banner: item.banner.url,
    }
  })

  console.log(continentResponse.data.slices[0].items)

  return {
    props: {
      continent,
      countries,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
