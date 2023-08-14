import extractLocalUser from "./extract-local-user";

describe('extractLocalUser Function', () => {
    it('correctly extracts user data', () => {
        const mockGithubUser = {
            id: 32121321,
            login: 'testuser',
            avatar_url: 'avatar-url',
            name: 'Test User',
            bio: 'Test Bio',
            blog: 'https://example.com',
            company: 'Test Company',
            created_at: '2023-08-12T12:00:00Z',
            followers: 100,
            following: 50,
            location: 'Test Location',
            public_repos: 10,
            twitter_username: 'testuser',
        };

        const localUser = extractLocalUser(mockGithubUser);

        expect(localUser).toEqual({
            login: 'testuser',
            avatar: 'avatar-url',
            name: 'Test User',
            bio: 'Test Bio',
            blog: 'https://example.com',
            company: 'Test Company',
            created: '2023-08-12T12:00:00Z',
            followers: 100,
            following: 50,
            location: 'Test Location',
            repos: 10,
            twitter: 'testuser',
        });
    });
});
