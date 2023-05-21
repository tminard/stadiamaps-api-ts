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


/**
 * 
 * @export
 */
export const TraceAttributeKey = {
    EdgeNames: 'edge.names',
    EdgeLength: 'edge.length',
    EdgeSpeed: 'edge.speed',
    EdgeRoadClass: 'edge.road_class',
    EdgeBeginHeading: 'edge.begin_heading',
    EdgeEndHeading: 'edge.end_heading',
    EdgeBeginShapeIndex: 'edge.begin_shape_index',
    EdgeEndShapeIndex: 'edge.end_shape_index',
    EdgeTraversability: 'edge.traversability',
    EdgeUse: 'edge.use',
    EdgeToll: 'edge.toll',
    EdgeUnpaved: 'edge.unpaved',
    EdgeTunnel: 'edge.tunnel',
    EdgeBridge: 'edge.bridge',
    EdgeRoundabout: 'edge.roundabout',
    EdgeInternalIntersection: 'edge.internal_intersection',
    EdgeDriveOnRight: 'edge.drive_on_right',
    EdgeSurface: 'edge.surface',
    EdgeSignExitNumber: 'edge.sign.exit_number',
    EdgeSignExitBranch: 'edge.sign.exit_branch',
    EdgeSignExitToward: 'edge.sign.exit_toward',
    EdgeSignExitName: 'edge.sign.exit_name',
    EdgeTravelMode: 'edge.travel_mode',
    EdgeVehicleType: 'edge.vehicle_type',
    EdgePedestrianType: 'edge.pedestrian_type',
    EdgeBicycleType: 'edge.bicycle_type',
    EdgeTransitType: 'edge.transit_type',
    EdgeId: 'edge.id',
    EdgeWayId: 'edge.way_id',
    EdgeWeightedGrade: 'edge.weighted_grade',
    EdgeMaxUpwardGrade: 'edge.max_upward_grade',
    EdgeMaxDownwardGrade: 'edge.max_downward_grade',
    EdgeMeanElevation: 'edge.mean_elevation',
    EdgeLaneCount: 'edge.lane_count',
    EdgeCycleLane: 'edge.cycle_lane',
    EdgeBicycleNetwork: 'edge.bicycle_network',
    EdgeSacScale: 'edge.sac_scale',
    EdgeSidewalk: 'edge.sidewalk',
    EdgeDensity: 'edge.density',
    EdgeSpeedLimit: 'edge.speed_limit',
    EdgeTruckSpeed: 'edge.truck_speed',
    EdgeTruckRoute: 'edge.truck_route',
    NodeIntersectingEdgeBeginHeading: 'node.intersecting_edge.begin_heading',
    NodeIntersectingEdgeFromEdgeNameConsistency: 'node.intersecting_edge.from_edge_name_consistency',
    NodeIntersectingEdgeToEdgeNameConsistency: 'node.intersecting_edge.to_edge_name_consistency',
    NodeIntersectingEdgeDriveability: 'node.intersecting_edge.driveability',
    NodeIntersectingEdgeCyclability: 'node.intersecting_edge.cyclability',
    NodeIntersectingEdgeWalkability: 'node.intersecting_edge.walkability',
    NodeIntersectingEdgeUse: 'node.intersecting_edge.use',
    NodeIntersectingEdgeRoadClass: 'node.intersecting_edge.road_class',
    NodeElapsedTime: 'node.elapsed_time',
    NodeAdminIndex: 'node.admin_index',
    NodeType: 'node.type',
    NodeFork: 'node.fork',
    NodeTimeZone: 'node.time_zone',
    OsmChangeset: 'osm_changeset',
    Shape: 'shape',
    AdminCountryCode: 'admin.country_code',
    AdminCountryText: 'admin.country_text',
    AdminStateCode: 'admin.state_code',
    AdminStateText: 'admin.state_text',
    MatchedPoint: 'matched.point',
    MatchedType: 'matched.type',
    MatchedEdgeIndex: 'matched.edge_index',
    MatchedBeginRouteDiscontinuity: 'matched.begin_route_discontinuity',
    MatchedEndRouteDiscontinuity: 'matched.end_route_discontinuity',
    MatchedDistanceAlongEdge: 'matched.distance_along_edge',
    MatchedDistanceFromTracePoint: 'matched.distance_from_trace_point'
} as const;
export type TraceAttributeKey = typeof TraceAttributeKey[keyof typeof TraceAttributeKey];


export function TraceAttributeKeyFromJSON(json: any): TraceAttributeKey {
    return TraceAttributeKeyFromJSONTyped(json, false);
}

export function TraceAttributeKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceAttributeKey {
    return json as TraceAttributeKey;
}

export function TraceAttributeKeyToJSON(value?: TraceAttributeKey | null): any {
    return value as any;
}
