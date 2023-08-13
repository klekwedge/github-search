import { GithubError, GithubUser } from "../types";
import extractLocalUser from "../utils/extract-local-user";
import isGithubUser from "../utils/typeguards";

const BASE_URL = 'https://api.github.com/users/';

const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);

    const gitHubUser = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(gitHubUser)) {
        return extractLocalUser(gitHubUser);
    }
    return null;

};


export default fetchUser;