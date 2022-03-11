import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import forkify from "../public/images/works/forkify.png";
import amazon from "../public/images/works/amazon.png";
import netflix from "../public/images/works/netflix.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="netflix"
              title="Netflix Clone"
              thumbnail={netflix}
              href="https://netflix-clone-2bbd8.web.app/"
            >
              Ingredients: React, ReactRouter, Styled Components
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem
              id="forkify"
              title="Forkify"
              thumbnail={forkify}
              href="https://forkify-phuvo.netlify.app/"
            >
              Ingredients: HTML,CSS, Javascript.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="amazon"
              title="Amazon Clone"
              thumbnail={amazon}
              href="https://amazon-clone-2-lemon.vercel.app/"
            >
              Ingredients: NextJS, NextAuth, Stripe, tailwindCSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
