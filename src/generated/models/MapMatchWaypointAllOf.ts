/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications. All endpoints are versioned individually to allow for granular upgrades. We follow the [Semantic Versioning scheme](https://semver.org/).
 *
 * The version of the OpenAPI document: 5.0.0
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
 * @interface MapMatchWaypointAllOf
 */
export interface MapMatchWaypointAllOf {
    /**
     * The timestamp of the waypoint, in seconds. This can inform the map matching algorithm about when the point was measured. A UNIX timestamp, or any increasing integer sequence measuring seconds from some reference point can be used.
     * @type {number}
     * @memberof MapMatchWaypointAllOf
     */
    time?: number;
}

/**
 * Check if a given object implements the MapMatchWaypointAllOf interface.
 */
export function instanceOfMapMatchWaypointAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MapMatchWaypointAllOfFromJSON(json: any): MapMatchWaypointAllOf {
    return MapMatchWaypointAllOfFromJSONTyped(json, false);
}

export function MapMatchWaypointAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapMatchWaypointAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'time': !exists(json, 'time') ? undefined : json['time'],
    };
}

export function MapMatchWaypointAllOfToJSON(value?: MapMatchWaypointAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time': value.time,
    };
}
