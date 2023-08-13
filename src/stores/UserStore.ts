/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import defaultUser from "../mock";
import fetchUser from "../services/GitHubAPI";
import { LocalGithubUser } from "../types";


class UserStore {
    user: LocalGithubUser | null = defaultUser;

    isLoading = false;

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
            console.error('Error in the fetch request');
        }
        // if (this.userName) {
        //     return BASE_URL + this.userName;
        // }
        // return null
    }
}


export default new UserStore();