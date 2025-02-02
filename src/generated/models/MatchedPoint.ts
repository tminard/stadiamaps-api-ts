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
/**
 * 
 * @export
 * @interface MatchedPoint
 */
export interface MatchedPoint {
    /**
     * The latitude of the matched point.
     * @type {number}
     * @memberof MatchedPoint
     */
    lat: number;
    /**
     * The longitude of the matched point.
     * @type {number}
     * @memberof MatchedPoint
     */
    lon: number;
    /**
     * 
     * @type {string}
     * @memberof MatchedPoint
     */
    type: MatchedPointTypeEnum;
    /**
     * The index of the edge in the list of `edges`. This key will be missing if the point is unmatched.
     * @type {number}
     * @memberof MatchedPoint
     */
    edgeIndex?: number;
    /**
     * If true, this match result is the begin location of a route discontinuity.
     * @type {boolean}
     * @memberof MatchedPoint
     */
    beginRouteDiscontinuity?: boolean;
    /**
     * If true, this match result is the end location of a route discontinuity.
     * @type {boolean}
     * @memberof MatchedPoint
     */
    endRouteDiscontinuity?: boolean;
    /**
     * The distance along the associated edge for this matched point, expressed as a value between 0 and 1. For example, if the matched point is halfway along the edge, then the value will be 0.5. This key will be absent if the point is unmatched.
     * @type {number}
     * @memberof MatchedPoint
     */
    distanceAlongEdge?: number;
    /**
     * The distance in meters from the trace point to the matched point. This key will be absent if the point is unmatched.
     * @type {number}
     * @memberof MatchedPoint
     */
    distanceFromTracePoint?: number;
}


/**
 * @export
 */
export const MatchedPointTypeEnum = {
    Unmatched: 'unmatched',
    Interpolated: 'interpolated',
    Matched: 'matched'
} as const;
export type MatchedPointTypeEnum = typeof MatchedPointTypeEnum[keyof typeof MatchedPointTypeEnum];


/**
 * Check if a given object implements the MatchedPoint interface.
 */
export function instanceOfMatchedPoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lon" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MatchedPointFromJSON(json: any): MatchedPoint {
    return MatchedPointFromJSONTyped(json, false);
}

export function MatchedPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchedPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lon': json['lon'],
        'type': json['type'],
        'edgeIndex': !exists(json, 'edge_index') ? undefined : json['edge_index'],
        'beginRouteDiscontinuity': !exists(json, 'begin_route_discontinuity') ? undefined : json['begin_route_discontinuity'],
        'endRouteDiscontinuity': !exists(json, 'end_route_discontinuity') ? undefined : json['end_route_discontinuity'],
        'distanceAlongEdge': !exists(json, 'distance_along_edge') ? undefined : json['distance_along_edge'],
        'distanceFromTracePoint': !exists(json, 'distance_from_trace_point') ? undefined : json['distance_from_trace_point'],
    };
}

export function MatchedPointToJSON(value?: MatchedPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lon': value.lon,
        'type': value.type,
        'edge_index': value.edgeIndex,
        'begin_route_discontinuity': value.beginRouteDiscontinuity,
        'end_route_discontinuity': value.endRouteDiscontinuity,
        'distance_along_edge': value.distanceAlongEdge,
        'distance_from_trace_point': value.distanceFromTracePoint,
    };
}

