export interface WowMappingsFetchRequest {
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