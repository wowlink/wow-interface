export interface WowLookupFetchRequest {
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

export interface WowLookupFetchResponse {
    wowMapping: Record<string, string>;
}

export interface WowLookupFetcher {
    fetch(req: WowLookupFetchRequest): WowLookupFetchResponse;
}

export interface WowConvertRequest {
    wowLink: string;
}

export interface WowConvertResponse {
    fullLink: string;
}

export interface WowLinkConverter {
    convert(req: WowConvertRequest): WowConvertResponse;
}
