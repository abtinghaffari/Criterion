/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCardOverridesProps = {
    ActionCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "How Does Title II Work?"?: PrimitiveOverrideProps<TextProps>;
    "The Rural Schools database provides the USDA with the ability to collect data from multiple Forest Service projects/offices across the US. Special Projects on Federal Lands are designated as Title II. Rather than being distributed to the State, Title II funds are retained by the Forest Service and are allocated to specific projects that have been reviewed and recommended by a local Resource Advisory Committee."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ActionCardOverridesProps | undefined | null;
}>;
export default function ActionCard(props: ActionCardProps): React.ReactElement;
