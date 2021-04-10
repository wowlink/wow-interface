import { WowMappingsFetchRequest, WowMappingsFetchResponse } from ".";

test('Create request', () => {
    const req: WowMappingsFetchRequest = {
        mappingSource: "github"
    };
    expect(req).toBeDefined();
});

test('Create response', () => {
    const res: WowMappingsFetchResponse = {
        wowMapping: {
            'gh': 'https://github.com'
        }
    }
    expect(res).toBeDefined();
});
