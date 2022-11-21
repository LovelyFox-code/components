import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Box, FlexColumn, Row, Section } from '../components/common/Common'
import { H1 } from '../components/Typography/Typography'
import styles from '../styles/Home.module.css'



export const Main = styled.div`
  max-width: 1120px;
  width: 90%;
  margin: auto;
`
export default function Home() {
  const router = useRouter()
  return (
    <Main className={styles.container}>
      <Head>
        <title>Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </Main>
  )
}
