import isGithubUser from "./typeguards";

describe('isGithubUser Function', () => {
    it('returns true for a valid GithubUser', () => {
        const mockGithubUser = {
            id: 123,
            login: 'testuser',
            avatar_url: 'avatar-url',
        };

        const result = isGithubUser(mockGithubUser);

        expect(result).toBe(true);
    });

    it('returns false for an object without "id"', () => {
        const mockObject = {
            login: 'testuser',
            avatar_url: 'avatar-url',
        };

        const result = isGithubUser(mockObject);

        expect(result).toBe(false);
    });
});
