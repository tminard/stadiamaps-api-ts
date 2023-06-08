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
import type { LocateEdge } from './LocateEdge';
import {
    LocateEdgeFromJSON,
    LocateEdgeFromJSONTyped,
    LocateEdgeToJSON,
} from './LocateEdge';
import type { LocateNode } from './LocateNode';
import {
    LocateNodeFromJSON,
    LocateNodeFromJSONTyped,
    LocateNodeToJSON,
} from './LocateNode';

/**
 * 
 * @export
 * @interface LocateObject
 */
export interface LocateObject {
    /**
     * An identifier to disambiguate requests (echoed by the server).
     * @type {string}
     * @memberof LocateObject
     */
    id?: string;
    /**
     * The input (searched) latitude.
     * @type {number}
     * @memberof LocateObject
     */
    inputLat?: number;
    /**
     * The input (searched) longitude.
     * @type {number}
     * @memberof LocateObject
     */
    inputLon?: number;
    /**
     * 
     * @type {Array<LocateNode>}
     * @memberof LocateObject
     */
    nodes?: Array<LocateNode>;
    /**
     * 
     * @type {Array<LocateEdge>}
     * @memberof LocateObject
     */
    edges?: Array<LocateEdge>;
}

/**
 * Check if a given object implements the LocateObject interface.
 */
export function instanceOfLocateObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocateObjectFromJSON(json: any): LocateObject {
    return LocateObjectFromJSONTyped(json, false);
}

export function LocateObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocateObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inputLat': !exists(json, 'input_lat') ? undefined : json['input_lat'],
        'inputLon': !exists(json, 'input_lon') ? undefined : json['input_lon'],
        'nodes': !exists(json, 'nodes') ? undefined : ((json['nodes'] as Array<any>).map(LocateNodeFromJSON)),
        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(LocateEdgeFromJSON)),
    };
}

export function LocateObjectToJSON(value?: LocateObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'input_lat': value.inputLat,
        'input_lon': value.inputLon,
        'nodes': value.nodes === undefined ? undefined : ((value.nodes as Array<any>).map(LocateNodeToJSON)),
        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(LocateEdgeToJSON)),
    };
}

