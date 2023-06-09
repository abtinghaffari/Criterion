/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanetModelsCreateFormInputValues = {
    Name?: string;
    PlanetType?: string;
    DistanceFromSun?: number;
    ImageUrl?: string;
};
export declare type PlanetModelsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    PlanetType?: ValidationFunction<string>;
    DistanceFromSun?: ValidationFunction<number>;
    ImageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanetModelsCreateFormOverridesProps = {
    PlanetModelsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PlanetType?: PrimitiveOverrideProps<TextFieldProps>;
    DistanceFromSun?: PrimitiveOverrideProps<TextFieldProps>;
    ImageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlanetModelsCreateFormProps = React.PropsWithChildren<{
    overrides?: PlanetModelsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlanetModelsCreateFormInputValues) => PlanetModelsCreateFormInputValues;
    onSuccess?: (fields: PlanetModelsCreateFormInputValues) => void;
    onError?: (fields: PlanetModelsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanetModelsCreateFormInputValues) => PlanetModelsCreateFormInputValues;
    onValidate?: PlanetModelsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlanetModelsCreateForm(props: PlanetModelsCreateFormProps): React.ReactElement;
