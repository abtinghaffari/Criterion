/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlanetModels } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanetModelsUpdateFormInputValues = {
    Name?: string;
    PlanetType?: string;
    DistanceFromSun?: number;
    ImageUrl?: string;
};
export declare type PlanetModelsUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    PlanetType?: ValidationFunction<string>;
    DistanceFromSun?: ValidationFunction<number>;
    ImageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanetModelsUpdateFormOverridesProps = {
    PlanetModelsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PlanetType?: PrimitiveOverrideProps<TextFieldProps>;
    DistanceFromSun?: PrimitiveOverrideProps<TextFieldProps>;
    ImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanetModelsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlanetModelsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    planetModels?: PlanetModels;
    onSubmit?: (fields: PlanetModelsUpdateFormInputValues) => PlanetModelsUpdateFormInputValues;
    onSuccess?: (fields: PlanetModelsUpdateFormInputValues) => void;
    onError?: (fields: PlanetModelsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanetModelsUpdateFormInputValues) => PlanetModelsUpdateFormInputValues;
    onValidate?: PlanetModelsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlanetModelsUpdateForm(props: PlanetModelsUpdateFormProps): React.ReactElement;
