/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotesListOverridesProps = {
    NotesList?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    header?: PrimitiveOverrideProps<FlexProps>;
    "What is Title II?"?: PrimitiveOverrideProps<TextProps>;
    "Title II provides assistance to agricultural producers and landowners to adopt conservation activities on agricultural and forest lands to protect and improve water quality and quantity, soil health, wildlife habitat, and air quality."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NotesListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NotesListOverridesProps | undefined | null;
}>;
export default function NotesList(props: NotesListProps): React.ReactElement;
