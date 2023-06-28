/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function NavBar2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1887px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(34,49,18,1)"
      {...getOverrideProps(overrides, "NavBar2")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="223px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="10px"
        left="7px"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button37502541")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
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
          {...getOverrideProps(overrides, "label37502543")}
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
        top="10px"
        left="256px"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Button37502602")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
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
          {...getOverrideProps(overrides, "label37502604")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="7px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="237px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="|"
        {...getOverrideProps(overrides, "|")}
      ></Text>
    </View>
  );
}
