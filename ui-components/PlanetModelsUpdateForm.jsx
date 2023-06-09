/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PlanetModels } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlanetModelsUpdateForm(props) {
  const {
    id: idProp,
    planetModels: planetModelsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    PlanetType: "",
    DistanceFromSun: "",
    ImageUrl: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [PlanetType, setPlanetType] = React.useState(initialValues.PlanetType);
  const [DistanceFromSun, setDistanceFromSun] = React.useState(
    initialValues.DistanceFromSun
  );
  const [ImageUrl, setImageUrl] = React.useState(initialValues.ImageUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = planetModelsRecord
      ? { ...initialValues, ...planetModelsRecord }
      : initialValues;
    setName(cleanValues.Name);
    setPlanetType(cleanValues.PlanetType);
    setDistanceFromSun(cleanValues.DistanceFromSun);
    setImageUrl(cleanValues.ImageUrl);
    setErrors({});
  };
  const [planetModelsRecord, setPlanetModelsRecord] = React.useState(
    planetModelsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PlanetModels, idProp)
        : planetModelsModelProp;
      setPlanetModelsRecord(record);
    };
    queryData();
  }, [idProp, planetModelsModelProp]);
  React.useEffect(resetStateValues, [planetModelsRecord]);
  const validations = {
    Name: [],
    PlanetType: [],
    DistanceFromSun: [],
    ImageUrl: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          PlanetType,
          DistanceFromSun,
          ImageUrl,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PlanetModels.copyOf(planetModelsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlanetModelsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              PlanetType,
              DistanceFromSun,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Planet type"
        isRequired={false}
        isReadOnly={false}
        value={PlanetType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PlanetType: value,
              DistanceFromSun,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.PlanetType ?? value;
          }
          if (errors.PlanetType?.hasError) {
            runValidationTasks("PlanetType", value);
          }
          setPlanetType(value);
        }}
        onBlur={() => runValidationTasks("PlanetType", PlanetType)}
        errorMessage={errors.PlanetType?.errorMessage}
        hasError={errors.PlanetType?.hasError}
        {...getOverrideProps(overrides, "PlanetType")}
      ></TextField>
      <TextField
        label="Distance from sun"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={DistanceFromSun}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              PlanetType,
              DistanceFromSun: value,
              ImageUrl,
            };
            const result = onChange(modelFields);
            value = result?.DistanceFromSun ?? value;
          }
          if (errors.DistanceFromSun?.hasError) {
            runValidationTasks("DistanceFromSun", value);
          }
          setDistanceFromSun(value);
        }}
        onBlur={() => runValidationTasks("DistanceFromSun", DistanceFromSun)}
        errorMessage={errors.DistanceFromSun?.errorMessage}
        hasError={errors.DistanceFromSun?.hasError}
        {...getOverrideProps(overrides, "DistanceFromSun")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={true}
        isReadOnly={false}
        value={ImageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PlanetType,
              DistanceFromSun,
              ImageUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.ImageUrl ?? value;
          }
          if (errors.ImageUrl?.hasError) {
            runValidationTasks("ImageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("ImageUrl", ImageUrl)}
        errorMessage={errors.ImageUrl?.errorMessage}
        hasError={errors.ImageUrl?.hasError}
        {...getOverrideProps(overrides, "ImageUrl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || planetModelsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || planetModelsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
