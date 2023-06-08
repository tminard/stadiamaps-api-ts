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
import type { GeoAttributes } from './GeoAttributes';
import {
    GeoAttributesFromJSON,
    GeoAttributesFromJSONTyped,
    GeoAttributesToJSON,
} from './GeoAttributes';
import type { HighwayClassification } from './HighwayClassification';
import {
    HighwayClassificationFromJSON,
    HighwayClassificationFromJSONTyped,
    HighwayClassificationToJSON,
} from './HighwayClassification';
import type { NodeId } from './NodeId';
import {
    NodeIdFromJSON,
    NodeIdFromJSONTyped,
    NodeIdToJSON,
} from './NodeId';
import type { Restrictions } from './Restrictions';
import {
    RestrictionsFromJSON,
    RestrictionsFromJSONTyped,
    RestrictionsToJSON,
} from './Restrictions';
import type { Speeds } from './Speeds';
import {
    SpeedsFromJSON,
    SpeedsFromJSONTyped,
    SpeedsToJSON,
} from './Speeds';

/**
 * 
 * @export
 * @interface LocateDetailedEdge
 */
export interface LocateDetailedEdge {
    /**
     * Is there a sidewalk to the left of the edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    sidewalkLeft?: boolean;
    /**
     * Is there a sidewalk to the right of the edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    sidewalkRight?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LocateDetailedEdge
     */
    laneCount?: number;
    /**
     * Is there a stop sign at end of the directed edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    stopSign?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocateDetailedEdge
     */
    sacScale?: LocateDetailedEdgeSacScaleEnum;
    /**
     * Is there a yield sign at end of the directed edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    yieldSign?: boolean;
    /**
     * Does the edge lead to a "no-through" region?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    notThru?: boolean;
    /**
     * Is the edge info forward? If false, then reverse is implied.
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    forward?: boolean;
    /**
     * 
     * @type {NodeId}
     * @memberof LocateDetailedEdge
     */
    endNode?: NodeId;
    /**
     * Is the edge part of a truck route/network?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    truckRoute?: boolean;
    /**
     * 
     * @type {Speeds}
     * @memberof LocateDetailedEdge
     */
    speeds?: Speeds;
    /**
     * Is the edge part of a bicycle network?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    bikeNetwork?: boolean;
    /**
     * Is the edge part of a roundabout?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    roundAbout?: boolean;
    /**
     * Is there a traffic signal at the end of the directed edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    trafficSignal?: boolean;
    /**
     * Is there a general restriction or access condition?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    accessRestriction?: boolean;
    /**
     * Is the edge destination only? If so, it will not be routed through.
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    destinationOnly?: boolean;
    /**
     * 
     * @type {GeoAttributes}
     * @memberof LocateDetailedEdge
     */
    geoAttributes?: GeoAttributes;
    /**
     * 
     * @type {Restrictions}
     * @memberof LocateDetailedEdge
     */
    startRestriction?: Restrictions;
    /**
     * Indication of the type of cycle lane (if any) present along an edge.
     * @type {string}
     * @memberof LocateDetailedEdge
     */
    cycleLane?: LocateDetailedEdgeCycleLaneEnum;
    /**
     * 
     * @type {Restrictions}
     * @memberof LocateDetailedEdge
     */
    endRestriction?: Restrictions;
    /**
     * Is access seasonal (ex. no access in winter)?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    seasonal?: boolean;
    /**
     * Does the edge cross into a new country?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    countryCrossing?: boolean;
    /**
     * Is the edge part of a complex restriction?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    partOfComplexRestriction?: boolean;
    /**
     * Do exit signs exist for the edge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    hasSign?: boolean;
    /**
     * 
     * @type {Restrictions}
     * @memberof LocateDetailedEdge
     */
    access?: Restrictions;
    /**
     * Is the edge part of a bridge?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    bridge?: boolean;
    /**
     * 
     * @type {HighwayClassification}
     * @memberof LocateDetailedEdge
     */
    classification?: HighwayClassification;
    /**
     * Is the edge part of a toll road?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    toll?: boolean;
    /**
     * Is the edge part of a tunnel?
     * @type {boolean}
     * @memberof LocateDetailedEdge
     */
    tunnel?: boolean;
}


/**
 * @export
 */
export const LocateDetailedEdgeSacScaleEnum = {
    None: 'none',
    Hiking: 'hiking',
    MountainHiking: 'mountain hiking',
    DemandingMountainHiking: 'demanding mountain hiking',
    AlpineHiking: 'alpine hiking',
    DemandingAlpineHiking: 'demanding alpine hiking',
    DifficultAlpineHiking: 'difficult alpine hiking'
} as const;
export type LocateDetailedEdgeSacScaleEnum = typeof LocateDetailedEdgeSacScaleEnum[keyof typeof LocateDetailedEdgeSacScaleEnum];

/**
 * @export
 */
export const LocateDetailedEdgeCycleLaneEnum = {
    None: 'none',
    Shared: 'shared',
    Dedicated: 'dedicated',
    Separated: 'separated'
} as const;
export type LocateDetailedEdgeCycleLaneEnum = typeof LocateDetailedEdgeCycleLaneEnum[keyof typeof LocateDetailedEdgeCycleLaneEnum];


/**
 * Check if a given object implements the LocateDetailedEdge interface.
 */
export function instanceOfLocateDetailedEdge(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocateDetailedEdgeFromJSON(json: any): LocateDetailedEdge {
    return LocateDetailedEdgeFromJSONTyped(json, false);
}

export function LocateDetailedEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocateDetailedEdge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sidewalkLeft': !exists(json, 'sidewalk_left') ? undefined : json['sidewalk_left'],
        'sidewalkRight': !exists(json, 'sidewalk_right') ? undefined : json['sidewalk_right'],
        'laneCount': !exists(json, 'lane_count') ? undefined : json['lane_count'],
        'stopSign': !exists(json, 'stop_sign') ? undefined : json['stop_sign'],
        'sacScale': !exists(json, 'sac_scale') ? undefined : json['sac_scale'],
        'yieldSign': !exists(json, 'yield_sign') ? undefined : json['yield_sign'],
        'notThru': !exists(json, 'not_thru') ? undefined : json['not_thru'],
        'forward': !exists(json, 'forward') ? undefined : json['forward'],
        'endNode': !exists(json, 'end_node') ? undefined : NodeIdFromJSON(json['end_node']),
        'truckRoute': !exists(json, 'truck_route') ? undefined : json['truck_route'],
        'speeds': !exists(json, 'speeds') ? undefined : SpeedsFromJSON(json['speeds']),
        'bikeNetwork': !exists(json, 'bike_network') ? undefined : json['bike_network'],
        'roundAbout': !exists(json, 'round_about') ? undefined : json['round_about'],
        'trafficSignal': !exists(json, 'traffic_signal') ? undefined : json['traffic_signal'],
        'accessRestriction': !exists(json, 'access_restriction') ? undefined : json['access_restriction'],
        'destinationOnly': !exists(json, 'destination_only') ? undefined : json['destination_only'],
        'geoAttributes': !exists(json, 'geo_attributes') ? undefined : GeoAttributesFromJSON(json['geo_attributes']),
        'startRestriction': !exists(json, 'start_restriction') ? undefined : RestrictionsFromJSON(json['start_restriction']),
        'cycleLane': !exists(json, 'cycle_lane') ? undefined : json['cycle_lane'],
        'endRestriction': !exists(json, 'end_restriction') ? undefined : RestrictionsFromJSON(json['end_restriction']),
        'seasonal': !exists(json, 'seasonal') ? undefined : json['seasonal'],
        'countryCrossing': !exists(json, 'country_crossing') ? undefined : json['country_crossing'],
        'partOfComplexRestriction': !exists(json, 'part_of_complex_restriction') ? undefined : json['part_of_complex_restriction'],
        'hasSign': !exists(json, 'has_sign') ? undefined : json['has_sign'],
        'access': !exists(json, 'access') ? undefined : RestrictionsFromJSON(json['access']),
        'bridge': !exists(json, 'bridge') ? undefined : json['bridge'],
        'classification': !exists(json, 'classification') ? undefined : HighwayClassificationFromJSON(json['classification']),
        'toll': !exists(json, 'toll') ? undefined : json['toll'],
        'tunnel': !exists(json, 'tunnel') ? undefined : json['tunnel'],
    };
}

export function LocateDetailedEdgeToJSON(value?: LocateDetailedEdge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sidewalk_left': value.sidewalkLeft,
        'sidewalk_right': value.sidewalkRight,
        'lane_count': value.laneCount,
        'stop_sign': value.stopSign,
        'sac_scale': value.sacScale,
        'yield_sign': value.yieldSign,
        'not_thru': value.notThru,
        'forward': value.forward,
        'end_node': NodeIdToJSON(value.endNode),
        'truck_route': value.truckRoute,
        'speeds': SpeedsToJSON(value.speeds),
        'bike_network': value.bikeNetwork,
        'round_about': value.roundAbout,
        'traffic_signal': value.trafficSignal,
        'access_restriction': value.accessRestriction,
        'destination_only': value.destinationOnly,
        'geo_attributes': GeoAttributesToJSON(value.geoAttributes),
        'start_restriction': RestrictionsToJSON(value.startRestriction),
        'cycle_lane': value.cycleLane,
        'end_restriction': RestrictionsToJSON(value.endRestriction),
        'seasonal': value.seasonal,
        'country_crossing': value.countryCrossing,
        'part_of_complex_restriction': value.partOfComplexRestriction,
        'has_sign': value.hasSign,
        'access': RestrictionsToJSON(value.access),
        'bridge': value.bridge,
        'classification': HighwayClassificationToJSON(value.classification),
        'toll': value.toll,
        'tunnel': value.tunnel,
    };
}

