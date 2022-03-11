import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, href, thumbnail }) => (
  <Box w="100%" align="center">
    <Link href={{ href }}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={href}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
    border-radius: 12px;
    }
  `}
  ></Global>
);

export const SkillGridItem = ({ title, score }) => (
  <Grid templateColumns="1fr, 2fr" gap={3}>
    <Box>
      <Text w="30%" fontSize={14}>
        {title}
      </Text>
    </Box>
    <Box>
      <Box
        w={`${score}%`}
        backgroundColor={useColorModeValue("#B07CF3", "#FFEE95")}
        h={10}
        align="center"
      >
        <Text align="center" pt={2} color={useColorModeValue("white", "black")}>
          {score}
        </Text>
      </Box>
    </Box>
  </Grid>
);
