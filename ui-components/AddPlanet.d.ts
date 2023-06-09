/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPlanetOverridesProps = {
    AddPlanet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add Planet"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Divider29766917?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload New Image"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29766925?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPlanetProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AddPlanetOverridesProps | undefined | null;
}>;
export default function AddPlanet(props: AddPlanetProps): React.ReactElement;
