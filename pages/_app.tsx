import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, FlexColumn, Row, Section } from '../components/common/Common'
import Link from 'next/link'
import { H1 } from '../components/Typography/Typography'
const elements = ["paginator", "accordion", "tooltip"]
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Section>
      <H1>Components</H1>
    </Section>
    <Row>
      <FlexColumn>
        {elements.map(name => <Box>
          <Link href={`/components/${encodeURIComponent(name)}`}>
            {name}
          </Link>
        </Box>)}
      </FlexColumn>
      <Component {...pageProps} />
    </Row>

  </>
}
