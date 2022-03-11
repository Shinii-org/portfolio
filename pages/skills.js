import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { SkillGridItem } from "../components/grid-item";

const Skills = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Skills
        </Heading>
        <Section>
          <SimpleGrid columns={1} gap={6}>
            <Section delay={0.1}>
              <SkillGridItem title="HTML" score="80" />
            </Section>
            <Section delay={0.2}>
              <SkillGridItem title="CSS" score="80" />
            </Section>
            <Section delay={0.3}>
              <SkillGridItem title="JavaScript" score="70" />
            </Section>
            <Section delay={0.4}>
              <SkillGridItem title="React" score="60" />
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Skills;
