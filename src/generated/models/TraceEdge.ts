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
import type { EdgeSign } from './EdgeSign';
import {
    EdgeSignFromJSON,
    EdgeSignFromJSONTyped,
    EdgeSignToJSON,
} from './EdgeSign';
import type { EdgeUse } from './EdgeUse';
import {
    EdgeUseFromJSON,
    EdgeUseFromJSONTyped,
    EdgeUseToJSON,
} from './EdgeUse';
import type { EndNode } from './EndNode';
import {
    EndNodeFromJSON,
    EndNodeFromJSONTyped,
    EndNodeToJSON,
} from './EndNode';
import type { RoadClass } from './RoadClass';
import {
    RoadClassFromJSON,
    RoadClassFromJSONTyped,
    RoadClassToJSON,
} from './RoadClass';
import type { TravelMode } from './TravelMode';
import {
    TravelModeFromJSON,
    TravelModeFromJSONTyped,
    TravelModeToJSON,
} from './TravelMode';
import type { Traversability } from './Traversability';
import {
    TraversabilityFromJSON,
    TraversabilityFromJSONTyped,
    TraversabilityToJSON,
} from './Traversability';

/**
 * 
 * @export
 * @interface TraceEdge
 */
export interface TraceEdge {
    /**
     * The name(s) of the road at this edge, if any.
     * @type {Array<string>}
     * @memberof TraceEdge
     */
    names?: Array<string>;
    /**
     * The length of this edge in `units`.
     * @type {number}
     * @memberof TraceEdge
     */
    length?: number;
    /**
     * The speed of this edge in `units`/hr, in terms of average/free-flow speed for routing purposes. This is affected by any number of factors such as the road service, vehicle type, etc. and not just the posted speed limits.
     * @type {number}
     * @memberof TraceEdge
     */
    speed?: number;
    /**
     * 
     * @type {RoadClass}
     * @memberof TraceEdge
     */
    roadClass?: RoadClass;
    /**
     * The direction at the beginning of an edge. The units are degrees clockwise from north.
     * @type {number}
     * @memberof TraceEdge
     */
    beginHeading?: number;
    /**
     * The direction at the end of an edge. The units are degrees clockwise from north.
     * @type {number}
     * @memberof TraceEdge
     */
    endHeading?: number;
    /**
     * Index into the list of shape points for the start of the edge.
     * @type {number}
     * @memberof TraceEdge
     */
    beginShapeIndex?: number;
    /**
     * Index into the list of shape points for the end of the edge.
     * @type {number}
     * @memberof TraceEdge
     */
    endShapeIndex?: number;
    /**
     * 
     * @type {Traversability}
     * @memberof TraceEdge
     */
    traversability?: Traversability;
    /**
     * 
     * @type {EdgeUse}
     * @memberof TraceEdge
     */
    use?: EdgeUse;
    /**
     * True if the edge has a toll.
     * @type {boolean}
     * @memberof TraceEdge
     */
    toll?: boolean;
    /**
     * True if the edge has rough payment.
     * @type {boolean}
     * @memberof TraceEdge
     */
    unpaved?: boolean;
    /**
     * True if the edge has a tunnel.
     * @type {boolean}
     * @memberof TraceEdge
     */
    tunnel?: boolean;
    /**
     * True if the edge has a bridge.
     * @type {boolean}
     * @memberof TraceEdge
     */
    bridge?: boolean;
    /**
     * True if the edge has a roundabout.
     * @type {boolean}
     * @memberof TraceEdge
     */
    roundabout?: boolean;
    /**
     * True if the edge has an internal intersection.
     * @type {boolean}
     * @memberof TraceEdge
     */
    internalIntersection?: boolean;
    /**
     * True if the edge is in an area where you must drive on the right side of the road.
     * @type {boolean}
     * @memberof TraceEdge
     */
    driveOnRight?: boolean;
    /**
     * The type of surface for the edge.
     * @type {string}
     * @memberof TraceEdge
     */
    surface?: TraceEdgeSurfaceEnum;
    /**
     * 
     * @type {EdgeSign}
     * @memberof TraceEdge
     */
    sign?: EdgeSign;
    /**
     * 
     * @type {TravelMode}
     * @memberof TraceEdge
     */
    travelMode?: TravelMode;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    vehicleType?: TraceEdgeVehicleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    pedestrianType?: TraceEdgePedestrianTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    bicycleType?: TraceEdgeBicycleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    transitType?: TraceEdgeTransitTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TraceEdge
     */
    id?: number;
    /**
     * The way identifier of the edge in OSM.
     * @type {number}
     * @memberof TraceEdge
     */
    wayId?: number;
    /**
     * The weighted grade factor. Valhalla manufactures a weighted grade from elevation data. It is a measure used for hill avoidance in routing - sort of a relative energy use along an edge. But since an edge in Valhalla can possibly go up and down over several hills it might not equate to what you would normally think of as grade.
     * @type {number}
     * @memberof TraceEdge
     */
    weightedGrade?: number;
    /**
     * The maximum upward slope. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    maxUpwardGrade?: number;
    /**
     * The maximum downward slope. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    maxDownwardGrade?: number;
    /**
     * The mean elevation along the edge. Units are meters by default. If the `units` are specified as miles, then the mean elevation is returned in feet. A value of 32768 indicates no elevation data is available for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    meanElevation?: number;
    /**
     * The number of lanes for this edge.
     * @type {number}
     * @memberof TraceEdge
     */
    laneCount?: number;
    /**
     * The type of cycle lane (if any) along this edge.
     * @type {string}
     * @memberof TraceEdge
     */
    cycleLane?: TraceEdgeCycleLaneEnum;
    /**
     * The type of bicycle network, if any. This is an integer comprised of constants bitwise or'd together. For example, a route that's part of both a local and mountain network would have a value of 12.
     * 1 - National 2 - Regional 4 - Local 8 - Mountain
     * @type {number}
     * @memberof TraceEdge
     */
    bicycleNetwork?: number;
    /**
     * The difficulty of the hiking trail according to the SAC scale.
     * 0 - No Sac Scale 1 - Hiking 2 - Mountain hiking 3 - Demanding mountain hiking 4 - Alpine hiking 5 - Demanding alpine hiking 6 - Difficult alpine hiking
     * @type {number}
     * @memberof TraceEdge
     */
    sacScale?: number;
    /**
     * 
     * @type {string}
     * @memberof TraceEdge
     */
    sidewalk?: TraceEdgeSidewalkEnum;
    /**
     * 
     * @type {number}
     * @memberof TraceEdge
     */
    density?: number;
    /**
     * The speed limit along the edge measured in `units`/hr. This may be either an integer or the string "unlimited" if speed limit data is available. If absent, there is no speed limit data available.
     * @type {any}
     * @memberof TraceEdge
     */
    speedLimit?: any | null;
    /**
     * The truck speed of this edge in `units`/hr, in terms of average/free-flow speed for routing purposes. This is affected by any number of factors such as the road service, vehicle type, etc. and not just the posted speed limits.
     * @type {number}
     * @memberof TraceEdge
     */
    truckSpeed?: number;
    /**
     * True if the edge is part of a truck route/network.
     * @type {boolean}
     * @memberof TraceEdge
     */
    truckRoute?: boolean;
    /**
     * 
     * @type {EndNode}
     * @memberof TraceEdge
     */
    endNode?: EndNode;
}


/**
 * @export
 */
export const TraceEdgeSurfaceEnum = {
    PavedSmooth: 'paved_smooth',
    Paved: 'paved',
    PavedRough: 'paved_rough',
    Compacted: 'compacted',
    Dirt: 'dirt',
    Gravel: 'gravel',
    Path: 'path',
    Impassable: 'impassable'
} as const;
export type TraceEdgeSurfaceEnum = typeof TraceEdgeSurfaceEnum[keyof typeof TraceEdgeSurfaceEnum];

/**
 * @export
 */
export const TraceEdgeVehicleTypeEnum = {
    Car: 'car',
    Motorcycle: 'motorcycle',
    Bus: 'bus',
    TractorTrailer: 'tractor_trailer'
} as const;
export type TraceEdgeVehicleTypeEnum = typeof TraceEdgeVehicleTypeEnum[keyof typeof TraceEdgeVehicleTypeEnum];

/**
 * @export
 */
export const TraceEdgePedestrianTypeEnum = {
    Foot: 'foot',
    Wheelchair: 'wheelchair',
    Segway: 'segway'
} as const;
export type TraceEdgePedestrianTypeEnum = typeof TraceEdgePedestrianTypeEnum[keyof typeof TraceEdgePedestrianTypeEnum];

/**
 * @export
 */
export const TraceEdgeBicycleTypeEnum = {
    Road: 'road',
    Cross: 'cross',
    Hybrid: 'hybrid',
    Mountain: 'mountain'
} as const;
export type TraceEdgeBicycleTypeEnum = typeof TraceEdgeBicycleTypeEnum[keyof typeof TraceEdgeBicycleTypeEnum];

/**
 * @export
 */
export const TraceEdgeTransitTypeEnum = {
    Tram: 'tram',
    Metro: 'metro',
    Rail: 'rail',
    Bus: 'bus',
    Ferry: 'ferry',
    CableCar: 'cable_car',
    Gondola: 'gondola',
    Funicular: 'funicular'
} as const;
export type TraceEdgeTransitTypeEnum = typeof TraceEdgeTransitTypeEnum[keyof typeof TraceEdgeTransitTypeEnum];

/**
 * @export
 */
export const TraceEdgeCycleLaneEnum = {
    None: 'none',
    Shared: 'shared',
    Dedicated: 'dedicated',
    Separated: 'separated'
} as const;
export type TraceEdgeCycleLaneEnum = typeof TraceEdgeCycleLaneEnum[keyof typeof TraceEdgeCycleLaneEnum];

/**
 * @export
 */
export const TraceEdgeSidewalkEnum = {
    Left: 'left',
    Right: 'right',
    Both: 'both',
    None: 'none'
} as const;
export type TraceEdgeSidewalkEnum = typeof TraceEdgeSidewalkEnum[keyof typeof TraceEdgeSidewalkEnum];


/**
 * Check if a given object implements the TraceEdge interface.
 */
export function instanceOfTraceEdge(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceEdgeFromJSON(json: any): TraceEdge {
    return TraceEdgeFromJSONTyped(json, false);
}

export function TraceEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceEdge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'names': !exists(json, 'names') ? undefined : json['names'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'speed': !exists(json, 'speed') ? undefined : json['speed'],
        'roadClass': !exists(json, 'road_class') ? undefined : RoadClassFromJSON(json['road_class']),
        'beginHeading': !exists(json, 'begin_heading') ? undefined : json['begin_heading'],
        'endHeading': !exists(json, 'end_heading') ? undefined : json['end_heading'],
        'beginShapeIndex': !exists(json, 'begin_shape_index') ? undefined : json['begin_shape_index'],
        'endShapeIndex': !exists(json, 'end_shape_index') ? undefined : json['end_shape_index'],
        'traversability': !exists(json, 'traversability') ? undefined : TraversabilityFromJSON(json['traversability']),
        'use': !exists(json, 'use') ? undefined : EdgeUseFromJSON(json['use']),
        'toll': !exists(json, 'toll') ? undefined : json['toll'],
        'unpaved': !exists(json, 'unpaved') ? undefined : json['unpaved'],
        'tunnel': !exists(json, 'tunnel') ? undefined : json['tunnel'],
        'bridge': !exists(json, 'bridge') ? undefined : json['bridge'],
        'roundabout': !exists(json, 'roundabout') ? undefined : json['roundabout'],
        'internalIntersection': !exists(json, 'internal_intersection') ? undefined : json['internal_intersection'],
        'driveOnRight': !exists(json, 'drive_on_right') ? undefined : json['drive_on_right'],
        'surface': !exists(json, 'surface') ? undefined : json['surface'],
        'sign': !exists(json, 'sign') ? undefined : EdgeSignFromJSON(json['sign']),
        'travelMode': !exists(json, 'travel_mode') ? undefined : TravelModeFromJSON(json['travel_mode']),
        'vehicleType': !exists(json, 'vehicle_type') ? undefined : json['vehicle_type'],
        'pedestrianType': !exists(json, 'pedestrian_type') ? undefined : json['pedestrian_type'],
        'bicycleType': !exists(json, 'bicycle_type') ? undefined : json['bicycle_type'],
        'transitType': !exists(json, 'transit_type') ? undefined : json['transit_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'wayId': !exists(json, 'way_id') ? undefined : json['way_id'],
        'weightedGrade': !exists(json, 'weighted_grade') ? undefined : json['weighted_grade'],
        'maxUpwardGrade': !exists(json, 'max_upward_grade') ? undefined : json['max_upward_grade'],
        'maxDownwardGrade': !exists(json, 'max_downward_grade') ? undefined : json['max_downward_grade'],
        'meanElevation': !exists(json, 'mean_elevation') ? undefined : json['mean_elevation'],
        'laneCount': !exists(json, 'lane_count') ? undefined : json['lane_count'],
        'cycleLane': !exists(json, 'cycle_lane') ? undefined : json['cycle_lane'],
        'bicycleNetwork': !exists(json, 'bicycle_network') ? undefined : json['bicycle_network'],
        'sacScale': !exists(json, 'sac_scale') ? undefined : json['sac_scale'],
        'sidewalk': !exists(json, 'sidewalk') ? undefined : json['sidewalk'],
        'density': !exists(json, 'density') ? undefined : json['density'],
        'speedLimit': !exists(json, 'speed_limit') ? undefined : json['speed_limit'],
        'truckSpeed': !exists(json, 'truck_speed') ? undefined : json['truck_speed'],
        'truckRoute': !exists(json, 'truck_route') ? undefined : json['truck_route'],
        'endNode': !exists(json, 'end_node') ? undefined : EndNodeFromJSON(json['end_node']),
    };
}

export function TraceEdgeToJSON(value?: TraceEdge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'names': value.names,
        'length': value.length,
        'speed': value.speed,
        'road_class': RoadClassToJSON(value.roadClass),
        'begin_heading': value.beginHeading,
        'end_heading': value.endHeading,
        'begin_shape_index': value.beginShapeIndex,
        'end_shape_index': value.endShapeIndex,
        'traversability': TraversabilityToJSON(value.traversability),
        'use': EdgeUseToJSON(value.use),
        'toll': value.toll,
        'unpaved': value.unpaved,
        'tunnel': value.tunnel,
        'bridge': value.bridge,
        'roundabout': value.roundabout,
        'internal_intersection': value.internalIntersection,
        'drive_on_right': value.driveOnRight,
        'surface': value.surface,
        'sign': EdgeSignToJSON(value.sign),
        'travel_mode': TravelModeToJSON(value.travelMode),
        'vehicle_type': value.vehicleType,
        'pedestrian_type': value.pedestrianType,
        'bicycle_type': value.bicycleType,
        'transit_type': value.transitType,
        'id': value.id,
        'way_id': value.wayId,
        'weighted_grade': value.weightedGrade,
        'max_upward_grade': value.maxUpwardGrade,
        'max_downward_grade': value.maxDownwardGrade,
        'mean_elevation': value.meanElevation,
        'lane_count': value.laneCount,
        'cycle_lane': value.cycleLane,
        'bicycle_network': value.bicycleNetwork,
        'sac_scale': value.sacScale,
        'sidewalk': value.sidewalk,
        'density': value.density,
        'speed_limit': value.speedLimit,
        'truck_speed': value.truckSpeed,
        'truck_route': value.truckRoute,
        'end_node': EndNodeToJSON(value.endNode),
    };
}

