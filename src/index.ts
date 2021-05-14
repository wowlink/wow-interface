export enum BuiltInLookupFetcherType {
    GitHub,
    Gist,
    LocalFile,
    CustomBackend,
}

export interface WowLookupFetchRequest { }

export interface WowLookupFetchResponse {
    wowMapping: Record<string, string>;
}

export interface WowLookupFetcherConfig {
    githubUser?: string;
    githubRepository?: string;
    gistUrl?: string;
    localFilename?: string;
    customApiEndpoint?: string;
}

export interface WowLookupFetcher {
    fetch(req: WowLookupFetchRequest): Promise<WowLookupFetchResponse>;
}

export enum BuiltInWowUrlConverterType {
    Basic,
}

export interface WowUrlConvertRequest {
    wowUrl: string;
}

/**
 * This is used to pack ranking information
 * together with the full URL itself which
 * can be used by any client UI to show more
 * information to help users decide which URL
 * is a better match for the search query.
 */
export interface WowUrlRankingItem {
    fullUrl: string;
}

export interface WowUrlConvertResponse {
    fullUrl: string;
    /**
     * This is used for ranking the potential
     * matching URLs when there is no direct
     * match.
     * 
     * For backward compatibility, it is marked
     * as optional for now, but will become
     * required when clients finish migration.
     * 
     * TODO(tianhaoz95): change this to required
     * once dependent migration is done.
     */
    searchRanking?: WowUrlRankingItem[];
}

export interface WowUrlConverterConfig {
    fetcherResponse: WowLookupFetchResponse;
}

export interface WowUrlConverter {
    convert(req: WowUrlConvertRequest): WowUrlConvertResponse;
}
