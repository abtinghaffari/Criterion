/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlanetsCardProps } from "./PlanetsCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanetsCardCollectionTwoOverridesProps = {
    PlanetsCardCollectionTwo?: PrimitiveOverrideProps<CollectionProps>;
    PlanetsCard?: PlanetsCardProps;
} & EscapeHatchProps;
export declare type PlanetsCardCollectionTwoProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PlanetsCardProps;
} & {
    overrides?: PlanetsCardCollectionTwoOverridesProps | undefined | null;
}>;
export default function PlanetsCardCollectionTwo(props: PlanetsCardCollectionTwoProps): React.ReactElement;
