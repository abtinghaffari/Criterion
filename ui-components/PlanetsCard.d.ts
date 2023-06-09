/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PlanetModels } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanetsCardOverridesProps = {
    PlanetsCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    PlanetName?: PrimitiveOverrideProps<TextProps>;
    "TypeOfPlanet-"?: PrimitiveOverrideProps<TextProps>;
    DistanceFromSun?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PlanetsCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    Planet?: PlanetModels;
} & {
    overrides?: PlanetsCardOverridesProps | undefined | null;
}>;
export default function PlanetsCard(props: PlanetsCardProps): React.ReactElement;
