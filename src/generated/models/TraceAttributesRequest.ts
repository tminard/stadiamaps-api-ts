/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.6
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CostingOptions } from './CostingOptions';
import {
    CostingOptionsFromJSON,
    CostingOptionsFromJSONTyped,
    CostingOptionsToJSON,
} from './CostingOptions';
import type { DirectionsOptions } from './DirectionsOptions';
import {
    DirectionsOptionsFromJSON,
    DirectionsOptionsFromJSONTyped,
    DirectionsOptionsToJSON,
} from './DirectionsOptions';
import type { MapMatchCostingModel } from './MapMatchCostingModel';
import {
    MapMatchCostingModelFromJSON,
    MapMatchCostingModelFromJSONTyped,
    MapMatchCostingModelToJSON,
} from './MapMatchCostingModel';
import type { MapMatchWaypoint } from './MapMatchWaypoint';
import {
    MapMatchWaypointFromJSON,
    MapMatchWaypointFromJSONTyped,
    MapMatchWaypointToJSON,
} from './MapMatchWaypoint';
import type { TraceAttributesRequestAllOfFilters } from './TraceAttributesRequestAllOfFilters';
import {
    TraceAttributesRequestAllOfFiltersFromJSON,
    TraceAttributesRequestAllOfFiltersFromJSONTyped,
    TraceAttributesRequestAllOfFiltersToJSON,
} from './TraceAttributesRequestAllOfFilters';

/**
 * 
 * @export
 * @interface TraceAttributesRequest
 */
export interface TraceAttributesRequest {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof TraceAttributesRequest
     */
    id?: string;
    /**
     * REQUIRED if `encoded_polyline` is not present. Note that `break` type locations are only supported when `shape_match` is set to `map_match`.
     * @type {Array<MapMatchWaypoint>}
     * @memberof TraceAttributesRequest
     */
    shape?: Array<MapMatchWaypoint>;
    /**
     * REQUIRED if `shape` is not present. An encoded polyline (https://developers.google.com/maps/documentation/utilities/polylinealgorithm). Note that the polyline must be encoded with 6 digits of precision rather than the usual 5.
     * @type {string}
     * @memberof TraceAttributesRequest
     */
    encodedPolyline?: string;
    /**
     * 
     * @type {MapMatchCostingModel}
     * @memberof TraceAttributesRequest
     */
    costing: MapMatchCostingModel;
    /**
     * 
     * @type {CostingOptions}
     * @memberof TraceAttributesRequest
     */
    costingOptions?: CostingOptions;
    /**
     * Three snapping modes provide some control over how the map matching occurs. `edge_walk` is fast, but requires extremely precise data that matches the route graph almost perfectly. `map_snap` can handle significantly noisier data, but is very expensive. `walk_or_snap`, the default, tries to use edge walking first and falls back to map matching if edge walking fails.
     * In general, you should not need to change this parameter unless you want to trace a multi-leg route with multiple `break` locations in the `shape`.
     * @type {string}
     * @memberof TraceAttributesRequest
     */
    shapeMatch?: TraceAttributesRequestShapeMatchEnum;
    /**
     * 
     * @type {DirectionsOptions}
     * @memberof TraceAttributesRequest
     */
    directionsOptions?: DirectionsOptions;
    /**
     * 
     * @type {TraceAttributesRequestAllOfFilters}
     * @memberof TraceAttributesRequest
     */
    filters?: TraceAttributesRequestAllOfFilters;
}


/**
 * @export
 */
export const TraceAttributesRequestShapeMatchEnum = {
    EdgeWalk: 'edge_walk',
    MapSnap: 'map_snap',
    WalkOrSnap: 'walk_or_snap'
} as const;
export type TraceAttributesRequestShapeMatchEnum = typeof TraceAttributesRequestShapeMatchEnum[keyof typeof TraceAttributesRequestShapeMatchEnum];


/**
 * Check if a given object implements the TraceAttributesRequest interface.
 */
export function instanceOfTraceAttributesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "costing" in value;

    return isInstance;
}

export function TraceAttributesRequestFromJSON(json: any): TraceAttributesRequest {
    return TraceAttributesRequestFromJSONTyped(json, false);
}

export function TraceAttributesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'shape': !exists(json, 'shape') ? undefined : ((json['shape'] as Array<any>).map(MapMatchWaypointFromJSON)),
        'encodedPolyline': !exists(json, 'encoded_polyline') ? undefined : json['encoded_polyline'],
        'costing': MapMatchCostingModelFromJSON(json['costing']),
        'costingOptions': !exists(json, 'costing_options') ? undefined : CostingOptionsFromJSON(json['costing_options']),
        'shapeMatch': !exists(json, 'shape_match') ? undefined : json['shape_match'],
        'directionsOptions': !exists(json, 'directions_options') ? undefined : DirectionsOptionsFromJSON(json['directions_options']),
        'filters': !exists(json, 'filters') ? undefined : TraceAttributesRequestAllOfFiltersFromJSON(json['filters']),
    };
}

export function TraceAttributesRequestToJSON(value?: TraceAttributesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'shape': value.shape === undefined ? undefined : ((value.shape as Array<any>).map(MapMatchWaypointToJSON)),
        'encoded_polyline': value.encodedPolyline,
        'costing': MapMatchCostingModelToJSON(value.costing),
        'costing_options': CostingOptionsToJSON(value.costingOptions),
        'shape_match': value.shapeMatch,
        'directions_options': DirectionsOptionsToJSON(value.directionsOptions),
        'filters': TraceAttributesRequestAllOfFiltersToJSON(value.filters),
    };
}

