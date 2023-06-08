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


import * as runtime from '../runtime';
import type {
  IsochroneRequest,
  IsochroneResponse,
  LocateObject,
  MapMatchRequest,
  MapMatchRouteResponse,
  MatrixRequest,
  MatrixResponse,
  NearestRoadsRequest,
  OptimizedRouteRequest,
  RouteRequest,
  RouteResponse,
  TraceAttributesRequest,
  TraceAttributesResponse,
} from '../models';
import {
    IsochroneRequestFromJSON,
    IsochroneRequestToJSON,
    IsochroneResponseFromJSON,
    IsochroneResponseToJSON,
    LocateObjectFromJSON,
    LocateObjectToJSON,
    MapMatchRequestFromJSON,
    MapMatchRequestToJSON,
    MapMatchRouteResponseFromJSON,
    MapMatchRouteResponseToJSON,
    MatrixRequestFromJSON,
    MatrixRequestToJSON,
    MatrixResponseFromJSON,
    MatrixResponseToJSON,
    NearestRoadsRequestFromJSON,
    NearestRoadsRequestToJSON,
    OptimizedRouteRequestFromJSON,
    OptimizedRouteRequestToJSON,
    RouteRequestFromJSON,
    RouteRequestToJSON,
    RouteResponseFromJSON,
    RouteResponseToJSON,
    TraceAttributesRequestFromJSON,
    TraceAttributesRequestToJSON,
    TraceAttributesResponseFromJSON,
    TraceAttributesResponseToJSON,
} from '../models';

export interface IsochroneOperationRequest {
    isochroneRequest?: IsochroneRequest;
}

export interface MapMatchOperationRequest {
    mapMatchRequest?: MapMatchRequest;
}

export interface NearestRoadsOperationRequest {
    nearestRoadsRequest?: NearestRoadsRequest;
}

export interface OptimizedRouteOperationRequest {
    optimizedRouteRequest?: OptimizedRouteRequest;
}

export interface RouteOperationRequest {
    routeRequest?: RouteRequest;
}

export interface TimeDistanceMatrixRequest {
    matrixRequest?: MatrixRequest;
}

export interface TraceAttributesOperationRequest {
    traceAttributesRequest?: TraceAttributesRequest;
}

/**
 * 
 */
export class RoutingApi extends runtime.BaseAPI {

    /**
     * The isochrone API lets you compute or visualize areas of roughly equal travel time based on the routing graph. The resulting polygon can be rendered on a map and shaded much like elevation contours and used for exploring urban mobility.
     * Calculate areas of equal travel time from a location.
     */
    async isochroneRaw(requestParameters: IsochroneOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IsochroneResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/isochrone/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IsochroneRequestToJSON(requestParameters.isochroneRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IsochroneResponseFromJSON(jsonValue));
    }

    /**
     * The isochrone API lets you compute or visualize areas of roughly equal travel time based on the routing graph. The resulting polygon can be rendered on a map and shaded much like elevation contours and used for exploring urban mobility.
     * Calculate areas of equal travel time from a location.
     */
    async isochrone(requestParameters: IsochroneOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IsochroneResponse> {
        const response = await this.isochroneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The map matching API transforms a recorded route into navigation instructions like you would get from the `route` endpoint. The input can be in the form of either an encoded polyline, or (optionally) timestamped coordinates.
     * Match a recorded route to the road network.
     */
    async mapMatchRaw(requestParameters: MapMatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MapMatchRouteResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/map_match/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MapMatchRequestToJSON(requestParameters.mapMatchRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MapMatchRouteResponseFromJSON(jsonValue));
    }

    /**
     * The map matching API transforms a recorded route into navigation instructions like you would get from the `route` endpoint. The input can be in the form of either an encoded polyline, or (optionally) timestamped coordinates.
     * Match a recorded route to the road network.
     */
    async mapMatch(requestParameters: MapMatchOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MapMatchRouteResponse> {
        const response = await this.mapMatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The nearest roads API allows you query for detailed information about streets and intersections near the input locations.
     * Find the nearest roads to the set of input locations.
     */
    async nearestRoadsRaw(requestParameters: NearestRoadsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LocateObject>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/nearest_roads/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NearestRoadsRequestToJSON(requestParameters.nearestRoadsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocateObjectFromJSON));
    }

    /**
     * The nearest roads API allows you query for detailed information about streets and intersections near the input locations.
     * Find the nearest roads to the set of input locations.
     */
    async nearestRoads(requestParameters: NearestRoadsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LocateObject>> {
        const response = await this.nearestRoadsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The optimized route API is a mix of the matrix and normal route API. For an optimized route, the start and end point are fixed, but the intermediate points will be re-ordered to form an optimal route visiting all nodes once. Note that all matrix endpoints have a limit of 1000 elements, regardless of the costing/mode of travel. A matrix request with 3 inputs and 5 outputs has 3 x 5 = 15 elements. This means you could send a 100 x 10 or 20 x 50 matrix request (each having 1000 elements), but not 40 x 30 as it has 1200 elements.
     * Calculate an optimized route between a known start and end point.
     */
    async optimizedRouteRaw(requestParameters: OptimizedRouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RouteResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/optimized_route/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OptimizedRouteRequestToJSON(requestParameters.optimizedRouteRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RouteResponseFromJSON(jsonValue));
    }

    /**
     * The optimized route API is a mix of the matrix and normal route API. For an optimized route, the start and end point are fixed, but the intermediate points will be re-ordered to form an optimal route visiting all nodes once. Note that all matrix endpoints have a limit of 1000 elements, regardless of the costing/mode of travel. A matrix request with 3 inputs and 5 outputs has 3 x 5 = 15 elements. This means you could send a 100 x 10 or 20 x 50 matrix request (each having 1000 elements), but not 40 x 30 as it has 1200 elements.
     * Calculate an optimized route between a known start and end point.
     */
    async optimizedRoute(requestParameters: OptimizedRouteOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RouteResponse> {
        const response = await this.optimizedRouteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The route (turn-by-turn) API computes routes between two or more locations. It supports a variety of tunable costing methods, and supports routing through intermediate waypoints and discontinuous multi-leg routes.
     * Get turn by turn routing instructions between two or more locations.
     */
    async routeRaw(requestParameters: RouteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RouteResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/route/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RouteRequestToJSON(requestParameters.routeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RouteResponseFromJSON(jsonValue));
    }

    /**
     * The route (turn-by-turn) API computes routes between two or more locations. It supports a variety of tunable costing methods, and supports routing through intermediate waypoints and discontinuous multi-leg routes.
     * Get turn by turn routing instructions between two or more locations.
     */
    async route(requestParameters: RouteOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RouteResponse> {
        const response = await this.routeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The time distance matrix API lets you compare travel times between a set of possible start and end points. Note that all matrix endpoints have a limit of 1000 elements, regardless of the costing/mode of travel. A matrix request with 3 inputs and 5 outputs has 3 x 5 = 15 elements. This means you could send a 100 x 10 or 20 x 50 matrix request (each having 1000 elements), but not 40 x 30 as it has 1200 elements.
     * Calculate a time distance matrix for a grid of start and end points.
     */
    async timeDistanceMatrixRaw(requestParameters: TimeDistanceMatrixRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MatrixResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/matrix/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MatrixRequestToJSON(requestParameters.matrixRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MatrixResponseFromJSON(jsonValue));
    }

    /**
     * The time distance matrix API lets you compare travel times between a set of possible start and end points. Note that all matrix endpoints have a limit of 1000 elements, regardless of the costing/mode of travel. A matrix request with 3 inputs and 5 outputs has 3 x 5 = 15 elements. This means you could send a 100 x 10 or 20 x 50 matrix request (each having 1000 elements), but not 40 x 30 as it has 1200 elements.
     * Calculate a time distance matrix for a grid of start and end points.
     */
    async timeDistanceMatrix(requestParameters: TimeDistanceMatrixRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MatrixResponse> {
        const response = await this.timeDistanceMatrixRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The trace attributes endpoint retrieves detailed information along a route, returning details for each section along the path, as well as any intersections encountered. In addition to tracing a recording route, this is great for providing just-in-time info to navigation applications, enabling them to conserve resources by omitting info like speed limits upfront that may be irrelevant if the user goes off-route.
     * Trace the attributes of roads visited on a route.
     */
    async traceAttributesRaw(requestParameters: TraceAttributesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TraceAttributesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/trace_attributes/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TraceAttributesRequestToJSON(requestParameters.traceAttributesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TraceAttributesResponseFromJSON(jsonValue));
    }

    /**
     * The trace attributes endpoint retrieves detailed information along a route, returning details for each section along the path, as well as any intersections encountered. In addition to tracing a recording route, this is great for providing just-in-time info to navigation applications, enabling them to conserve resources by omitting info like speed limits upfront that may be irrelevant if the user goes off-route.
     * Trace the attributes of roads visited on a route.
     */
    async traceAttributes(requestParameters: TraceAttributesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TraceAttributesResponse> {
        const response = await this.traceAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
