/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchUser from "../services/GitHubAPI";
import { LocalGithubUser } from "../types";


class UserStore {
    user: LocalGithubUser | null = null;

    isLoading = false;

    hasError = false;

    constructor() {
        makeAutoObservable(this)
    }

    getGitHubUser = async (userName: string) => {
        try {
            this.isLoading = true
            const res = await fetchUser(userName)

            runInAction(() => {
                this.user = res;
                this.isLoading = false
            })
        } catch (error) {
            this.isLoading = false;
            this.hasError = true;
        }
    }
}


export default new UserStore();