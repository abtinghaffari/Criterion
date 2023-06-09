import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlanetModels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlanetModels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly PlanetType?: string | null;
  readonly DistanceFromSun?: number | null;
  readonly ImageUrl: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlanetModels = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlanetModels, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly PlanetType?: string | null;
  readonly DistanceFromSun?: number | null;
  readonly ImageUrl: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlanetModels = LazyLoading extends LazyLoadingDisabled ? EagerPlanetModels : LazyPlanetModels

export declare const PlanetModels: (new (init: ModelInit<PlanetModels>) => PlanetModels) & {
  copyOf(source: PlanetModels, mutator: (draft: MutableModel<PlanetModels>) => MutableModel<PlanetModels> | void): PlanetModels;
}