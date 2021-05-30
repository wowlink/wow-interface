import {
  WowLookupFetchRequest,
  WowLookupFetchResponse,
  WowUrlConverter,
  WowUrlConverterConfig,
  WowUrlConvertRequest,
  WowUrlConvertResponse,
  WowUrlRankingItem,
} from ".";

describe("Fetcher interface tests", () => {
  test("Create request", () => {
    const req: WowLookupFetchRequest = {
      mappingSource: "github",
    };
    expect(req).toBeDefined();
  });

  test("Create response", () => {
    const res: WowLookupFetchResponse = {
      wowMapping: {
        gh: "https://github.com",
      },
    };
    expect(res).toBeDefined();
  });
});

describe("Converter interface tests", () => {
  test("Create request", () => {
    const req: WowUrlConvertRequest = {
      wowUrl: "test_wow_url",
    };
    expect(req).toBeDefined();
  });

  test("Create response", () => {
    // TODO(tianhaoz95): add another test to check
    // it should fail without searchRanking once the
    // field has become required.
    const res: WowUrlConvertResponse = {
      fullUrl: "test_full_url",
      isMatch: true,
      postfix: "wowlink",
      searchRanking: [],
    };
    expect(res).toBeDefined();
  });

  test("Create ranking item", () => {
    const rankingItem: WowUrlRankingItem = {
      wowUrl: "test_wow_url",
      fullUrl: "test_full_url",
      score: 0.6,
    };
    expect(rankingItem).toBeDefined();
  });

  test("Create config", () => {
    const config: WowUrlConverterConfig = {
      fetcherResponse: {
        wowMapping: {},
      },
    };
    expect(config).toBeDefined();
  });

  test("Create converter", () => {
    class DummyConverter implements WowUrlConverter {
      convert(req: WowUrlConvertRequest): WowUrlConvertResponse {
        const res: WowUrlConvertResponse = {
          fullUrl: "test_full_url",
          searchRanking: [],
        };
        return res;
      }
    }
    const converter: WowUrlConverter = new DummyConverter();
    expect(converter).toBeDefined();
  });
});
