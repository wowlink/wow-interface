interface WowMappingsFetchRequest {
    mappingSource: "github" | "gist" | "local" | "custom";
    githubUser?: string;
    githubRepository?: string;
    gistUrl?: string;
    localFilename?: string;
    customApiEndpoint?: string;
}

interface WowMappingsFetchResponse {
    wowMapping: Record<string, string>;
}