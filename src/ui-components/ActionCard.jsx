/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ActionCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ActionCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="341px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://www.naco.org/sites/default/files/styles/hero_1_up/public/GettyImages-867082604.jpg?itok=H-Yh2UgA"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="353px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="How Does Title II Work?"
            {...getOverrideProps(overrides, "How Does Title II Work?")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="306px"
            height="319px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="&#xA;The Rural Schools database provides the USDA with the ability to collect data from multiple Forest Service projects/offices across the US. Special Projects on Federal Lands are designated as Title II.&#xA;&#xA;Rather than being distributed to the State, Title II funds are retained by the Forest Service and are allocated to specific projects that have been reviewed and recommended by a local Resource Advisory Committee. "
            {...getOverrideProps(
              overrides,
              "The Rural Schools database provides the USDA with the ability to collect data from multiple Forest Service projects/offices across the US. Special Projects on Federal Lands are designated as Title II. Rather than being distributed to the State, Title II funds are retained by the Forest Service and are allocated to specific projects that have been reviewed and recommended by a local Resource Advisory Committee."
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
