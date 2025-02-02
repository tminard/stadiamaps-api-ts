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
 * @interface GeoJSONLineString
 */
export interface GeoJSONLineString {
    /**
     * 
     * @type {string}
     * @memberof GeoJSONLineString
     */
    type: GeoJSONLineStringTypeEnum;
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof GeoJSONLineString
     */
    coordinates: Array<Array<number>>;
}


/**
 * @export
 */
export const GeoJSONLineStringTypeEnum = {
    Point: 'Point',
    MultiPoint: 'MultiPoint',
    LineString: 'LineString',
    MultiLineString: 'MultiLineString',
    Polygon: 'Polygon',
    MultiPolygon: 'MultiPolygon'
} as const;
export type GeoJSONLineStringTypeEnum = typeof GeoJSONLineStringTypeEnum[keyof typeof GeoJSONLineStringTypeEnum];


/**
 * Check if a given object implements the GeoJSONLineString interface.
 */
export function instanceOfGeoJSONLineString(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "coordinates" in value;

    return isInstance;
}

export function GeoJSONLineStringFromJSON(json: any): GeoJSONLineString {
    return GeoJSONLineStringFromJSONTyped(json, false);
}

export function GeoJSONLineStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJSONLineString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'coordinates': json['coordinates'],
    };
}

export function GeoJSONLineStringToJSON(value?: GeoJSONLineString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'coordinates': value.coordinates,
    };
}

