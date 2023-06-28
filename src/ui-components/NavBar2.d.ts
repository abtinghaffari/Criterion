/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBar2OverridesProps = {
    NavBar2?: PrimitiveOverrideProps<ViewProps>;
    Button37502541?: PrimitiveOverrideProps<FlexProps>;
    label37502543?: PrimitiveOverrideProps<TextProps>;
    Button37502602?: PrimitiveOverrideProps<FlexProps>;
    label37502604?: PrimitiveOverrideProps<TextProps>;
    "|"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBar2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavBar2OverridesProps | undefined | null;
}>;
export default function NavBar2(props: NavBar2Props): React.ReactElement;
