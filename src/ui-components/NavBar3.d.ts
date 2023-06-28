/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBar3OverridesProps = {
    NavBar3?: PrimitiveOverrideProps<ViewProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    Button37502664?: PrimitiveOverrideProps<FlexProps>;
    label37502666?: PrimitiveOverrideProps<TextProps>;
    Button37502659?: PrimitiveOverrideProps<FlexProps>;
    label37502661?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBar3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavBar3OverridesProps | undefined | null;
}>;
export default function NavBar3(props: NavBar3Props): React.ReactElement;
