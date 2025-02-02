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
import type { RouteResponseTrip } from './RouteResponseTrip';
import {
    RouteResponseTripFromJSON,
    RouteResponseTripFromJSONTyped,
    RouteResponseTripToJSON,
} from './RouteResponseTrip';

/**
 * 
 * @export
 * @interface MapMatchRouteResponse
 */
export interface MapMatchRouteResponse {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof MapMatchRouteResponse
     */
    id?: string;
    /**
     * 
     * @type {RouteResponseTrip}
     * @memberof MapMatchRouteResponse
     */
    trip: RouteResponseTrip;
    /**
     * 
     * @type {Array<string>}
     * @memberof MapMatchRouteResponse
     */
    linearReferences?: Array<string>;
}

/**
 * Check if a given object implements the MapMatchRouteResponse interface.
 */
export function instanceOfMapMatchRouteResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "trip" in value;

    return isInstance;
}

export function MapMatchRouteResponseFromJSON(json: any): MapMatchRouteResponse {
    return MapMatchRouteResponseFromJSONTyped(json, false);
}

export function MapMatchRouteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchRouteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'trip': RouteResponseTripFromJSON(json['trip']),
        'linearReferences': !exists(json, 'linear_references') ? undefined : json['linear_references'],
    };
}

export function MapMatchRouteResponseToJSON(value?: MapMatchRouteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'trip': RouteResponseTripToJSON(value.trip),
        'linear_references': value.linearReferences,
    };
}

