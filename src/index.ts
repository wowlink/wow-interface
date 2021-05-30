export enum BuiltInLookupFetcherType {
  GitHub,
  Gist,
  LocalFile,
  CustomBackend,
}

export interface WowLookupFetchRequest {}

export interface WowLookupFetchResponse {
  wowMapping: Record<string, string>;
}

export interface WowLookupFetcherConfig {
  githubUser?: string;
  githubRepository?: string;
  /**
   * The filename of the configuration file inside
   * the repository defined by githubUser/githubRepository
   * that contains the mapping.
   */
  githubConfigFilename?: string;
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
  /**
   * Typing partial wowUrl will be supported.
   *
   * For example, if gh/tianhaoz95 is set to my
   * GitHub profile, then typing gh/tianhaoz
   * should show the correct URL as a potential
   * option.
   */
  wowUrl: string;
  /**
   * Potentially the full URL can be matched as
   * well.
   *
   * For example, if gh is mapped to https://github.com,
   * although searching github will not match gh, it makes
   * sense to match https://github.com.
   */
  fullUrl: string;
  /**
   * The matching score that the search algorithm
   * outputs. Although it should already be ranked,
   * it will be good to also include the source for
   * ranking.
   */
  score: number;
}

export interface WowUrlConvertResponse {
  /**
   * This field indicates if the converter think
   * that this field is good enough to return to
   * the user.
   *
   * For example, for exact converter, this will
   * only be set to true if the if the requested
   * short link is exactly the same as one of the
   * options, but for search converter, it will
   * be true as long as there are some URLs above
   * the matching threshold.
   *
   * TODO(@tianhaoz95): make required after migration.
   */
  isMatch?: boolean;
  fullUrl: string;
  /**
   * The postfix of a short link. For example, if
   * gh is set to point to https://github.com, it's
   * possible to also have a gh/{scopes} to map
   * gh/tianhaoz95 to https://github.com/tianhaoz95.
   *
   * TODO(@tianhaoz95): figure out the for postfix.
   */
  postfix?: string;
  /**
   * This is used for ranking the potential
   * matching URLs when there is no direct
   * match.
   */
  searchRanking?: WowUrlRankingItem[];
}

export interface WowUrlConverterConfig {
  fetcherResponse: WowLookupFetchResponse;
}

export interface WowUrlConverter {
  convert(req: WowUrlConvertRequest): WowUrlConvertResponse;
}
