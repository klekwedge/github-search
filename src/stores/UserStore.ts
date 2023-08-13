/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import fetchUser from "../services/GitHubAPI";
import { LocalGithubUser } from "../types";


class UserStore {
    user: LocalGithubUser | null = null;

    isLoading = false;

    userName = 'ff';

    constructor() {
        makeAutoObservable(this)
    }

    getGitHubUser = async () => {
        try {
            this.isLoading = true
            const res = await fetchUser(this.userName)

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