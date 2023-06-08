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
import type { IsochroneProperties } from './IsochroneProperties';
import {
    IsochronePropertiesFromJSON,
    IsochronePropertiesFromJSONTyped,
    IsochronePropertiesToJSON,
} from './IsochroneProperties';

/**
 * 
 * @export
 * @interface IsochroneFeature
 */
export interface IsochroneFeature {
    /**
     * 
     * @type {IsochroneProperties}
     * @memberof IsochroneFeature
     */
    properties?: IsochroneProperties;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IsochroneFeature
     */
    geometry?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof IsochroneFeature
     */
    type?: IsochroneFeatureTypeEnum;
}


/**
 * @export
 */
export const IsochroneFeatureTypeEnum = {
    LineString: 'LineString',
    Polygon: 'Polygon'
} as const;
export type IsochroneFeatureTypeEnum = typeof IsochroneFeatureTypeEnum[keyof typeof IsochroneFeatureTypeEnum];


/**
 * Check if a given object implements the IsochroneFeature interface.
 */
export function instanceOfIsochroneFeature(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IsochroneFeatureFromJSON(json: any): IsochroneFeature {
    return IsochroneFeatureFromJSONTyped(json, false);
}

export function IsochroneFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsochroneFeature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'properties': !exists(json, 'properties') ? undefined : IsochronePropertiesFromJSON(json['properties']),
        'geometry': !exists(json, 'geometry') ? undefined : json['geometry'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IsochroneFeatureToJSON(value?: IsochroneFeature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'properties': IsochronePropertiesToJSON(value.properties),
        'geometry': value.geometry,
        'type': value.type,
    };
}

