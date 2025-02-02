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


import * as runtime from '../runtime';
import type {
  PeliasLayer,
  PeliasResponse,
  PeliasSource,
} from '../models';
import {
    PeliasLayerFromJSON,
    PeliasLayerToJSON,
    PeliasResponseFromJSON,
    PeliasResponseToJSON,
    PeliasSourceFromJSON,
    PeliasSourceToJSON,
} from '../models';

export interface AutocompleteRequest {
    text: string;
    focusPointLat?: number;
    focusPointLon?: number;
    boundaryRectMinLat?: number;
    boundaryRectMaxLat?: number;
    boundaryRectMinLon?: number;
    boundaryRectMaxLon?: number;
    boundaryCircleLat?: number;
    boundaryCircleLon?: number;
    boundaryCircleRadius?: number;
    boundaryCountry?: Array<string>;
    boundaryGid?: string;
    layers?: Array<PeliasLayer>;
    sources?: Array<PeliasSource>;
    size?: number;
    lang?: string;
}

export interface PlaceRequest {
    ids: Array<string>;
    lang?: string;
}

export interface ReverseRequest {
    pointLat: number;
    pointLon: number;
    boundaryCircleRadius?: number;
    layers?: Array<PeliasLayer>;
    sources?: Array<PeliasSource>;
    boundaryCountry?: Array<string>;
    boundaryGid?: string;
    size?: number;
    lang?: string;
}

export interface SearchRequest {
    text: string;
    focusPointLat?: number;
    focusPointLon?: number;
    boundaryRectMinLat?: number;
    boundaryRectMaxLat?: number;
    boundaryRectMinLon?: number;
    boundaryRectMaxLon?: number;
    boundaryCircleLat?: number;
    boundaryCircleLon?: number;
    boundaryCircleRadius?: number;
    boundaryCountry?: Array<string>;
    boundaryGid?: string;
    layers?: Array<PeliasLayer>;
    sources?: Array<PeliasSource>;
    size?: number;
    lang?: string;
}

export interface SearchStructuredRequest {
    address?: string;
    neighbourhood?: string;
    borough?: string;
    locality?: string;
    county?: string;
    region?: string;
    postalcode?: string;
    country?: string;
    focusPointLat?: number;
    focusPointLon?: number;
    boundaryRectMinLat?: number;
    boundaryRectMaxLat?: number;
    boundaryRectMinLon?: number;
    boundaryRectMaxLon?: number;
    boundaryCircleLat?: number;
    boundaryCircleLon?: number;
    boundaryCircleRadius?: number;
    boundaryCountry?: Array<string>;
    boundaryGid?: string;
    layers?: Array<PeliasLayer>;
    sources?: Array<PeliasSource>;
    size?: number;
    lang?: string;
}

/**
 * 
 */
export class GeocodingApi extends runtime.BaseAPI {

    /**
     * Autocomplete enables interactive search-as-you-type user experiences, suggesting places as you type, along with information that will help your users find the correct place quickly.
     * Search and geocode quickly based on partial input.
     */
    async autocompleteRaw(requestParameters: AutocompleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PeliasResponse>> {
        if (requestParameters.text === null || requestParameters.text === undefined) {
            throw new runtime.RequiredError('text','Required parameter requestParameters.text was null or undefined when calling autocomplete.');
        }

        const queryParameters: any = {};

        if (requestParameters.text !== undefined) {
            queryParameters['text'] = requestParameters.text;
        }

        if (requestParameters.focusPointLat !== undefined) {
            queryParameters['focus.point.lat'] = requestParameters.focusPointLat;
        }

        if (requestParameters.focusPointLon !== undefined) {
            queryParameters['focus.point.lon'] = requestParameters.focusPointLon;
        }

        if (requestParameters.boundaryRectMinLat !== undefined) {
            queryParameters['boundary.rect.min_lat'] = requestParameters.boundaryRectMinLat;
        }

        if (requestParameters.boundaryRectMaxLat !== undefined) {
            queryParameters['boundary.rect.max_lat'] = requestParameters.boundaryRectMaxLat;
        }

        if (requestParameters.boundaryRectMinLon !== undefined) {
            queryParameters['boundary.rect.min_lon'] = requestParameters.boundaryRectMinLon;
        }

        if (requestParameters.boundaryRectMaxLon !== undefined) {
            queryParameters['boundary.rect.max_lon'] = requestParameters.boundaryRectMaxLon;
        }

        if (requestParameters.boundaryCircleLat !== undefined) {
            queryParameters['boundary.circle.lat'] = requestParameters.boundaryCircleLat;
        }

        if (requestParameters.boundaryCircleLon !== undefined) {
            queryParameters['boundary.circle.lon'] = requestParameters.boundaryCircleLon;
        }

        if (requestParameters.boundaryCircleRadius !== undefined) {
            queryParameters['boundary.circle.radius'] = requestParameters.boundaryCircleRadius;
        }

        if (requestParameters.boundaryCountry) {
            queryParameters['boundary.country'] = requestParameters.boundaryCountry.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.boundaryGid !== undefined) {
            queryParameters['boundary.gid'] = requestParameters.boundaryGid;
        }

        if (requestParameters.layers) {
            queryParameters['layers'] = requestParameters.layers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sources) {
            queryParameters['sources'] = requestParameters.sources.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/geocoding/v1/autocomplete`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PeliasResponseFromJSON(jsonValue));
    }

    /**
     * Autocomplete enables interactive search-as-you-type user experiences, suggesting places as you type, along with information that will help your users find the correct place quickly.
     * Search and geocode quickly based on partial input.
     */
    async autocomplete(requestParameters: AutocompleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PeliasResponse> {
        const response = await this.autocompleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Many search result components include an associated GID field (for example, an address may have a `localadmin_gid`). The place endpoint lets you look up these places directly by ID. Note that these IDs are not stable for all sources. See the [online documentation](https://docs.stadiamaps.com/geocoding-search-autocomplete/place-lookup/) for details.
     * Retrieve details of a place using its GID.
     */
    async placeRaw(requestParameters: PlaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PeliasResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling place.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/geocoding/v1/place`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PeliasResponseFromJSON(jsonValue));
    }

    /**
     * Many search result components include an associated GID field (for example, an address may have a `localadmin_gid`). The place endpoint lets you look up these places directly by ID. Note that these IDs are not stable for all sources. See the [online documentation](https://docs.stadiamaps.com/geocoding-search-autocomplete/place-lookup/) for details.
     * Retrieve details of a place using its GID.
     */
    async place(requestParameters: PlaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PeliasResponse> {
        const response = await this.placeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reverse geocoding and search finds places and addresses near any geographic coordinates.
     * Find places and addresses near geographic coordinates (reverse geocoding).
     */
    async reverseRaw(requestParameters: ReverseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PeliasResponse>> {
        if (requestParameters.pointLat === null || requestParameters.pointLat === undefined) {
            throw new runtime.RequiredError('pointLat','Required parameter requestParameters.pointLat was null or undefined when calling reverse.');
        }

        if (requestParameters.pointLon === null || requestParameters.pointLon === undefined) {
            throw new runtime.RequiredError('pointLon','Required parameter requestParameters.pointLon was null or undefined when calling reverse.');
        }

        const queryParameters: any = {};

        if (requestParameters.pointLat !== undefined) {
            queryParameters['point.lat'] = requestParameters.pointLat;
        }

        if (requestParameters.pointLon !== undefined) {
            queryParameters['point.lon'] = requestParameters.pointLon;
        }

        if (requestParameters.boundaryCircleRadius !== undefined) {
            queryParameters['boundary.circle.radius'] = requestParameters.boundaryCircleRadius;
        }

        if (requestParameters.layers) {
            queryParameters['layers'] = requestParameters.layers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sources) {
            queryParameters['sources'] = requestParameters.sources.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.boundaryCountry) {
            queryParameters['boundary.country'] = requestParameters.boundaryCountry.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.boundaryGid !== undefined) {
            queryParameters['boundary.gid'] = requestParameters.boundaryGid;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/geocoding/v1/reverse`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PeliasResponseFromJSON(jsonValue));
    }

    /**
     * Reverse geocoding and search finds places and addresses near any geographic coordinates.
     * Find places and addresses near geographic coordinates (reverse geocoding).
     */
    async reverse(requestParameters: ReverseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PeliasResponse> {
        const response = await this.reverseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The search endpoint lets you search for addresses, points of interest, and administrative areas. This is most commonly used for forward geocoding applications where you need to find the geographic coordinates of an address.
     * Search for location and other info using a place name or address (forward geocoding).
     */
    async searchRaw(requestParameters: SearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PeliasResponse>> {
        if (requestParameters.text === null || requestParameters.text === undefined) {
            throw new runtime.RequiredError('text','Required parameter requestParameters.text was null or undefined when calling search.');
        }

        const queryParameters: any = {};

        if (requestParameters.text !== undefined) {
            queryParameters['text'] = requestParameters.text;
        }

        if (requestParameters.focusPointLat !== undefined) {
            queryParameters['focus.point.lat'] = requestParameters.focusPointLat;
        }

        if (requestParameters.focusPointLon !== undefined) {
            queryParameters['focus.point.lon'] = requestParameters.focusPointLon;
        }

        if (requestParameters.boundaryRectMinLat !== undefined) {
            queryParameters['boundary.rect.min_lat'] = requestParameters.boundaryRectMinLat;
        }

        if (requestParameters.boundaryRectMaxLat !== undefined) {
            queryParameters['boundary.rect.max_lat'] = requestParameters.boundaryRectMaxLat;
        }

        if (requestParameters.boundaryRectMinLon !== undefined) {
            queryParameters['boundary.rect.min_lon'] = requestParameters.boundaryRectMinLon;
        }

        if (requestParameters.boundaryRectMaxLon !== undefined) {
            queryParameters['boundary.rect.max_lon'] = requestParameters.boundaryRectMaxLon;
        }

        if (requestParameters.boundaryCircleLat !== undefined) {
            queryParameters['boundary.circle.lat'] = requestParameters.boundaryCircleLat;
        }

        if (requestParameters.boundaryCircleLon !== undefined) {
            queryParameters['boundary.circle.lon'] = requestParameters.boundaryCircleLon;
        }

        if (requestParameters.boundaryCircleRadius !== undefined) {
            queryParameters['boundary.circle.radius'] = requestParameters.boundaryCircleRadius;
        }

        if (requestParameters.boundaryCountry) {
            queryParameters['boundary.country'] = requestParameters.boundaryCountry.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.boundaryGid !== undefined) {
            queryParameters['boundary.gid'] = requestParameters.boundaryGid;
        }

        if (requestParameters.layers) {
            queryParameters['layers'] = requestParameters.layers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sources) {
            queryParameters['sources'] = requestParameters.sources.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/geocoding/v1/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PeliasResponseFromJSON(jsonValue));
    }

    /**
     * The search endpoint lets you search for addresses, points of interest, and administrative areas. This is most commonly used for forward geocoding applications where you need to find the geographic coordinates of an address.
     * Search for location and other info using a place name or address (forward geocoding).
     */
    async search(requestParameters: SearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PeliasResponse> {
        const response = await this.searchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The structured search endpoint lets you search for addresses, points of interest, and administrative areas. Rather than a single string which the API must infer meaning from, the structured search endpoint allows you to specify the known components upfront, which is useful in many forward geocoding workflows.
     * Find locations matching components (structured forward geocoding).
     */
    async searchStructuredRaw(requestParameters: SearchStructuredRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PeliasResponse>> {
        const queryParameters: any = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.neighbourhood !== undefined) {
            queryParameters['neighbourhood'] = requestParameters.neighbourhood;
        }

        if (requestParameters.borough !== undefined) {
            queryParameters['borough'] = requestParameters.borough;
        }

        if (requestParameters.locality !== undefined) {
            queryParameters['locality'] = requestParameters.locality;
        }

        if (requestParameters.county !== undefined) {
            queryParameters['county'] = requestParameters.county;
        }

        if (requestParameters.region !== undefined) {
            queryParameters['region'] = requestParameters.region;
        }

        if (requestParameters.postalcode !== undefined) {
            queryParameters['postalcode'] = requestParameters.postalcode;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.focusPointLat !== undefined) {
            queryParameters['focus.point.lat'] = requestParameters.focusPointLat;
        }

        if (requestParameters.focusPointLon !== undefined) {
            queryParameters['focus.point.lon'] = requestParameters.focusPointLon;
        }

        if (requestParameters.boundaryRectMinLat !== undefined) {
            queryParameters['boundary.rect.min_lat'] = requestParameters.boundaryRectMinLat;
        }

        if (requestParameters.boundaryRectMaxLat !== undefined) {
            queryParameters['boundary.rect.max_lat'] = requestParameters.boundaryRectMaxLat;
        }

        if (requestParameters.boundaryRectMinLon !== undefined) {
            queryParameters['boundary.rect.min_lon'] = requestParameters.boundaryRectMinLon;
        }

        if (requestParameters.boundaryRectMaxLon !== undefined) {
            queryParameters['boundary.rect.max_lon'] = requestParameters.boundaryRectMaxLon;
        }

        if (requestParameters.boundaryCircleLat !== undefined) {
            queryParameters['boundary.circle.lat'] = requestParameters.boundaryCircleLat;
        }

        if (requestParameters.boundaryCircleLon !== undefined) {
            queryParameters['boundary.circle.lon'] = requestParameters.boundaryCircleLon;
        }

        if (requestParameters.boundaryCircleRadius !== undefined) {
            queryParameters['boundary.circle.radius'] = requestParameters.boundaryCircleRadius;
        }

        if (requestParameters.boundaryCountry) {
            queryParameters['boundary.country'] = requestParameters.boundaryCountry.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.boundaryGid !== undefined) {
            queryParameters['boundary.gid'] = requestParameters.boundaryGid;
        }

        if (requestParameters.layers) {
            queryParameters['layers'] = requestParameters.layers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sources) {
            queryParameters['sources'] = requestParameters.sources.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["api_key"] = this.configuration.apiKey("api_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/geocoding/v1/search/structured`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PeliasResponseFromJSON(jsonValue));
    }

    /**
     * The structured search endpoint lets you search for addresses, points of interest, and administrative areas. Rather than a single string which the API must infer meaning from, the structured search endpoint allows you to specify the known components upfront, which is useful in many forward geocoding workflows.
     * Find locations matching components (structured forward geocoding).
     */
    async searchStructured(requestParameters: SearchStructuredRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PeliasResponse> {
        const response = await this.searchStructuredRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
