/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications.
 *
 * The version of the OpenAPI document: 5.0.1
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PeliasGeoJSONFeature } from './PeliasGeoJSONFeature';
import {
    PeliasGeoJSONFeatureFromJSON,
    PeliasGeoJSONFeatureFromJSONTyped,
    PeliasGeoJSONFeatureToJSON,
} from './PeliasGeoJSONFeature';
import type { PeliasResponseGeocoding } from './PeliasResponseGeocoding';
import {
    PeliasResponseGeocodingFromJSON,
    PeliasResponseGeocodingFromJSONTyped,
    PeliasResponseGeocodingToJSON,
} from './PeliasResponseGeocoding';

/**
 * 
 * @export
 * @interface PeliasResponse
 */
export interface PeliasResponse {
    /**
     * 
     * @type {PeliasResponseGeocoding}
     * @memberof PeliasResponse
     */
    geocoding: PeliasResponseGeocoding;
    /**
     * An array of 4 floating point numbers representing the (W, S, E, N) extremes of the features found.
     * @type {Array<number>}
     * @memberof PeliasResponse
     */
    bbox?: Array<number>;
    /**
     * 
     * @type {Array<PeliasGeoJSONFeature>}
     * @memberof PeliasResponse
     */
    features: Array<PeliasGeoJSONFeature>;
}

/**
 * Check if a given object implements the PeliasResponse interface.
 */
export function instanceOfPeliasResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "geocoding" in value;
    isInstance = isInstance && "features" in value;

    return isInstance;
}

export function PeliasResponseFromJSON(json: any): PeliasResponse {
    return PeliasResponseFromJSONTyped(json, false);
}

export function PeliasResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeliasResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'geocoding': PeliasResponseGeocodingFromJSON(json['geocoding']),
        'bbox': !exists(json, 'bbox') ? undefined : json['bbox'],
        'features': ((json['features'] as Array<any>).map(PeliasGeoJSONFeatureFromJSON)),
    };
}

export function PeliasResponseToJSON(value?: PeliasResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'geocoding': PeliasResponseGeocodingToJSON(value.geocoding),
        'bbox': value.bbox,
        'features': ((value.features as Array<any>).map(PeliasGeoJSONFeatureToJSON)),
    };
}

