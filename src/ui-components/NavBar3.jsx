/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function NavBar3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1887px"
      height="248px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(174,179,183,1)"
      {...getOverrideProps(overrides, "NavBar3")}
      {...rest}
    >
      <View
        width="1887px"
        height="187px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="24.6%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(220,222,224,1)"
        {...getOverrideProps(overrides, "Frame 322")}
      ></View>
      <Flex
        gap="0"
        direction="row"
        width="146px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="9px"
        left="44px"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button37502664")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create Project Request"
          {...getOverrideProps(overrides, "label37502666")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="146px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="9px"
        left="261px"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button37502659")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Learn More"
          {...getOverrideProps(overrides, "label37502661")}
        ></Text>
      </Flex>
    </View>
  );
}
