import {
  Box,
  Flex,
  Image as ImageN,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import html from "../pics/html.svg";
import css from "../pics/css.svg";
import js from "../pics/js.svg";
import sass from "../pics/sass.svg";
import react from "../pics/react.svg";
import ts from "../pics/ts.svg";
import git from "../pics/git.svg";
import redux from "../pics/redux.svg";
import github from "../pics/github.svg";
import fire from "../pics/fire.svg";
import gulp from "../pics/gulp.svg";
import vscode from "../pics/vscode.svg";
import yarn from "../pics/yarn.svg";
import npm from "../pics/npm.svg";
import mat from "../pics/mat.svg";
import chakra from "../pics/chakra.svg";
import node from "../pics/node-js.svg";
import roboGood from "../pics/robo-good.svg";
import roboGear from "../pics/robo-gear.svg";
import roboStudy from "../pics/robo-study.svg";
import ui from "../pics/ui.svg";
import next from "../pics/next.svg";
import express from "../pics/express.svg";
import boot from "../pics/boot.svg";
import word from "../pics/word.svg";
import pug from "../pics/pug.svg";
import Image from "next/image";
import { roboAnimation } from "@/utils/animations";
import Head from "next/head";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  label: string;
  src: string;
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
export function Skill( props:Props ) {
  return (
    <Tooltip hasArrow label={props.label} placement="top">
      <ImageN as={Image} alt="noooo" loading="lazy" w="120px" src={props.src} />
    </Tooltip>
  );
}

function Skills() {
  const [isSmallerThn300px] = useMediaQuery("min-width: 1280px");

  return (
    <div>
      <Head>
        <title>Amr Kakashi | Skills</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Stack  bg={useColorModeValue("gray.200", "gray.700")}>
        <Box w="100%" h="90%" p="8" marginBottom="20px">
          
          
          <Text
            fontSize={{ sm: "30" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            MY SKILLS
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <ImageN
                as={Image}
                w="250px"
                objectFit="cover"
                alt="noooo"
                src={roboGood}
                scaleX={"-1"}
                animation={roboAnimation}
              />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w="70%"
            >
              <Skill label="HTML5" src={html} />
              <Skill label="CSS3" src={css} />
              <Skill label="JAVA SCRIPT" src={js} />
              <Skill label="TYPE SCRIPT" src={ts} />
              <Skill label="SASS" src={sass} />
              <Skill label="REACT JS" src={react} />
              <Skill label="NEXT JS" src={next} />
              <Skill label="REDUX & REDUX TOOLKIT" src={redux} />
            </Flex>
          </Flex>
        </Box>
        <br />
        {/* /////////////////////////// */}
        <Box w="100%" h="90%" p="8" marginBottom="20px">
          <Text
            fontSize={{ sm: "35" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            TOOLS I USE
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <ImageN
                as={Image}
                w="250px"
                objectFit="cover"
                src={roboGear}
                animation={roboAnimation}
              />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w={"70%"}
            >
              <Skill label="VISUAL STUDIO CODE" src={vscode} />
              <Skill label="NODE PACKAGE MANAGER" src={npm} />
              <Skill label="YARN" src={yarn} />
              <Skill label="GIT" src={git} />
              <Skill label="GIT HUB" src={github} />
              <Skill label="FIREBASE" src={fire} />
              <Skill label="GULP JS" src={gulp} />
              <Skill label="PUG JS" src={pug} />
              <Skill label="CHAKRA UI" src={chakra} />
              <Skill label="MATERIAL UI" src={mat} />
              <Skill label="BOOTSTRAP 5" src={boot} />
            </Flex>
          </Flex>
        </Box>
        <br />
        {/* /////////////////////////// */}

        <Box w="100%" h="90%" p="8">
          <Text
            marginTop="15px"
            fontSize={{ sm: "30" }}
            fontWeight="700"
            textAlign="center"
            h="90px"
          >
            STUDYING CURRENTLY
          </Text>

          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            flexDir={{ md: "row", sm: "column", isSmallerThn300px: "column" }}
          >
            <Flex
              w={{
                base: "30%",
                md: "30%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
              justify="center"
            >
              <ImageN
                as={Image}
                w="250px"
                objectFit="cover"
                alt="noooo"
                src={roboStudy}
                scaleX={"-1"}
                animation={roboAnimation}
              />
            </Flex>
            <Flex
              justify="space-around"
              gap="5"
              align="center"
              wrap="wrap"
              w={{
                base: "70%",
                md: "70%",
                sm: "100%",
                isSmallerThn300px: "100%",
              }}
            >
              <Skill label="NODE JS" src={node} />
              <Skill label="EXPRESS JS" src={express} />
              <Skill label="WORDPRESS" src={word} />
              <Skill label="UI UX" src={ui} />
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
}

export default Skills;
