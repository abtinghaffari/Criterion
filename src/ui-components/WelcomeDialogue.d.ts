/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WelcomeDialogueOverridesProps = {
    WelcomeDialogue?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to the USDA Title II Funding Page"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    "To submit a project request, the user must submit a form to the USDA Forest Service..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WelcomeDialogueProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WelcomeDialogueOverridesProps | undefined | null;
}>;
export default function WelcomeDialogue(props: WelcomeDialogueProps): React.ReactElement;
