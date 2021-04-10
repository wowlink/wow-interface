export interface WowMappingsFetchRequest {
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

export interface WowMappingsFetchResponse {
    wowMapping: Record<string, string>;
}

export interface WowConvertRequest {
    wowLink: string;
}

export interface WowConverterResponse {
    fullLink: string;
}