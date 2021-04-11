export interface WowLookupFetchRequest { }

export interface WowLookupFetchResponse {
    wowMapping: Record<string, string>;
}

export interface WowLookupFetcherConfig {
    // For now the only allowed source is github. More source
    // types will be added in the future to help with more use
    // cases.
    mappingSource: "github" | "gist" | "local" | "custom";
    githubUser?: string;
    githubRepository?: string;
    gistUrl?: string;
    localFilename?: string;
    customApiEndpoint?: string;
}

export interface WowLookupFetcher {
    fetch(req: WowLookupFetchRequest): WowLookupFetchResponse;
}

export interface WowUrlConvertRequest {
    wowUrl: string;
}

export interface WowUrlConvertResponse {
    fullUrl: string;
}

export interface WowUrlConverterConfig {
    fetcherResponse: WowLookupFetchResponse;
}

export interface WowUrlConverter {
    convert(req: WowUrlConvertRequest): WowUrlConvertResponse;
}
