/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { PlanetModels } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PlanetsCard from "./PlanetsCard";
import { Collection } from "@aws-amplify/ui-react";
export default function PlanetsCardCollectionTwo(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.Name(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PlanetModels,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "PlanetsCardCollectionTwo")}
      {...rest}
    >
      {(item, index) => (
        <PlanetsCard
          Planet={item}
          margin="1rem 1rem 1rem 1rem"
          height="auto"
          width="auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PlanetsCard>
      )}
    </Collection>
  );
}
