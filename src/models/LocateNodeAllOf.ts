/* tslint:disable */
/* eslint-disable */
/**
 * Stadia Maps Geospatial APIs
 * The Stadia Maps Geospatial APIs provide you with the data you need to build awesome applications. All endpoints are versioned individually to allow for granular upgrades. We follow the [Semantic Versioning scheme](https://semver.org/).
 *
 * The version of the OpenAPI document: 4.1.0
 * Contact: support@stadiamaps.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Access } from './Access';
import {
    AccessFromJSON,
    AccessFromJSONTyped,
    AccessToJSON,
} from './Access';
import type { Administrative } from './Administrative';
import {
    AdministrativeFromJSON,
    AdministrativeFromJSONTyped,
    AdministrativeToJSON,
} from './Administrative';
import type { NodeId } from './NodeId';
import {
    NodeIdFromJSON,
    NodeIdFromJSONTyped,
    NodeIdToJSON,
} from './NodeId';
import type { NodeType } from './NodeType';
import {
    NodeTypeFromJSON,
    NodeTypeFromJSONTyped,
    NodeTypeToJSON,
} from './NodeType';

/**
 * 
 * @export
 * @interface LocateNodeAllOf
 */
export interface LocateNodeAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof LocateNodeAllOf
     */
    trafficSignal?: boolean;
    /**
     * 
     * @type {NodeType}
     * @memberof LocateNodeAllOf
     */
    type?: NodeType;
    /**
     * 
     * @type {NodeId}
     * @memberof LocateNodeAllOf
     */
    nodeId?: NodeId;
    /**
     * 
     * @type {Access}
     * @memberof LocateNodeAllOf
     */
    access?: Access;
    /**
     * 
     * @type {number}
     * @memberof LocateNodeAllOf
     */
    edgeCount?: number;
    /**
     * 
     * @type {Administrative}
     * @memberof LocateNodeAllOf
     */
    administrative?: Administrative;
    /**
     * 
     * @type {string}
     * @memberof LocateNodeAllOf
     */
    intersectionType?: LocateNodeAllOfIntersectionTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LocateNodeAllOf
     */
    density?: number;
    /**
     * 
     * @type {number}
     * @memberof LocateNodeAllOf
     */
    localEdgeCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LocateNodeAllOf
     */
    modeChange?: boolean;
}


/**
 * @export
 */
export const LocateNodeAllOfIntersectionTypeEnum = {
    Regular: 'regular',
    False: 'false',
    DeadEnd: 'dead-end',
    Fork: 'fork'
} as const;
export type LocateNodeAllOfIntersectionTypeEnum = typeof LocateNodeAllOfIntersectionTypeEnum[keyof typeof LocateNodeAllOfIntersectionTypeEnum];


/**
 * Check if a given object implements the LocateNodeAllOf interface.
 */
export function instanceOfLocateNodeAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocateNodeAllOfFromJSON(json: any): LocateNodeAllOf {
    return LocateNodeAllOfFromJSONTyped(json, false);
}

export function LocateNodeAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocateNodeAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'trafficSignal': !exists(json, 'traffic_signal') ? undefined : json['traffic_signal'],
        'type': !exists(json, 'type') ? undefined : NodeTypeFromJSON(json['type']),
        'nodeId': !exists(json, 'node_id') ? undefined : NodeIdFromJSON(json['node_id']),
        'access': !exists(json, 'access') ? undefined : AccessFromJSON(json['access']),
        'edgeCount': !exists(json, 'edge_count') ? undefined : json['edge_count'],
        'administrative': !exists(json, 'administrative') ? undefined : AdministrativeFromJSON(json['administrative']),
        'intersectionType': !exists(json, 'intersection_type') ? undefined : json['intersection_type'],
        'density': !exists(json, 'density') ? undefined : json['density'],
        'localEdgeCount': !exists(json, 'local_edge_count') ? undefined : json['local_edge_count'],
        'modeChange': !exists(json, 'mode_change') ? undefined : json['mode_change'],
    };
}

export function LocateNodeAllOfToJSON(value?: LocateNodeAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'traffic_signal': value.trafficSignal,
        'type': NodeTypeToJSON(value.type),
        'node_id': NodeIdToJSON(value.nodeId),
        'access': AccessToJSON(value.access),
        'edge_count': value.edgeCount,
        'administrative': AdministrativeToJSON(value.administrative),
        'intersection_type': value.intersectionType,
        'density': value.density,
        'local_edge_count': value.localEdgeCount,
        'mode_change': value.modeChange,
    };
}

