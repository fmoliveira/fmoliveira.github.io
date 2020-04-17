import React from "react"

import Box from "../components/Box"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Text from "../components/Text"
import Title from "../components/Title"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box width={["100%", 2 / 3]}>
      <Title as="h2">Hello, I'm Filipe!</Title>
      <Text>
        I'm a Freelance Software Engineer from Brazil. I enjoy coding with
        TypeScript, React, Node.js, Jest and Testing Library. Here I write
        articles and tutorials for the technologies I use daily, and I also keep
        a digital garden with my most recent learnings.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage