/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBar4OverridesProps = {
    NavBar4?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    path3724?: PrimitiveOverrideProps<IconProps>;
    path3726?: PrimitiveOverrideProps<IconProps>;
    path3728?: PrimitiveOverrideProps<IconProps>;
    path3730?: PrimitiveOverrideProps<IconProps>;
    path3732?: PrimitiveOverrideProps<IconProps>;
    path3734?: PrimitiveOverrideProps<IconProps>;
    path3736?: PrimitiveOverrideProps<IconProps>;
    path3738?: PrimitiveOverrideProps<IconProps>;
    "Logo_of_the_United_States_Forest_Service 2"?: PrimitiveOverrideProps<ImageProps>;
    "Forest Service U.S Department of Agriculture"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBar4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavBar4OverridesProps | undefined | null;
}>;
export default function NavBar4(props: NavBar4Props): React.ReactElement;
