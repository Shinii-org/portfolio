import NextLink from "next/link";

import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioYear, BioSection } from "../components/bio";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          align="center"
        >
          Hello, I&apos;m a Front-End Fresher!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Phu Vo
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/phuvo.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduction
          </Heading>
          <Paragraph>
            My full name is Vo Ngoc Phu. I graduated from Industrial University
            majoring in Car Engineering. After graduating, i had worked for a
            Singapore Company as a Sale Engineer in over a year. After that, i
            quit and started learning programming. Please feel free to check out
            some of my works on my
            <Link>
              <a href="https://github.com/Shinii-org"> Github</a>
            </Link>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Bachelor Degree majoring in Car Engineering at the
            Industrial University.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Work at BBC Trading Company as a Sale Engineer.
          </BioSection>
          <BioSection>
            <BioYear>08/2021</BioYear>
            Started learning programming.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <Paragraph>
            Listening To Music, Reading Science Relating Topic, Programming.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>

          <BioSection>
            <BioYear>Email:</BioYear>
            ngocphu280996@gmail.com
          </BioSection>
          <BioSection>
            <BioYear>Phone Number:</BioYear>
            070.732.9853
          </BioSection>
          <BioSection>
            <BioYear>Address:</BioYear>
            373/1/57D Ly Thuong Kiet Street, Ward 9, District Tan Binh, Ho Chi
            Minh City.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
