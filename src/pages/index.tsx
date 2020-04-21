import React from "react"

import Avatar from "../components/Avatar"
import Box from "../components/Box"
import Inline from "../components/Inline"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SocialLink from "../components/SocialLink"
import Stack from "../components/Stack"
import Text from "../components/Text"
import Title from "../components/Title"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Title as="h2">Hello, I'm Filipe!</Title>
      <Inline py={4} space={5}>
        <Stack space={4}>
          <Text>
            I'm a Freelance Software Engineer from Brazil. I enjoy coding with
            TypeScript, React, Node.js, Jest and Testing Library. Here I write
            articles and tutorials for the technologies I use daily, and I also
            keep a digital garden with my most recent learnings.
          </Text>
          <Inline space={4}>
            <SocialLink network="github" url="https://github.com/fmoliveira" />
            <SocialLink
              network="twitter"
              url="https://twitter.com/tfmoliveira"
            />
          </Inline>
        </Stack>
      </Inline>
    </Box>
  </Layout>
)

export default IndexPage
