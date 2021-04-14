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
