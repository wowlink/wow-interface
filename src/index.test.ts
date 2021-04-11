import { WowLookupFetchRequest, WowLookupFetchResponse } from ".";

test('Create request', () => {
    const req: WowLookupFetchRequest = {
        mappingSource: "github"
    };
    expect(req).toBeDefined();
});

test('Create response', () => {
    const res: WowLookupFetchResponse = {
        wowMapping: {
            'gh': 'https://github.com'
        }
    }
    expect(res).toBeDefined();
});
