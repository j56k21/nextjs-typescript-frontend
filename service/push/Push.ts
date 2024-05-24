import axios from "axios";

const PUSH_API_URL = '/api/push';


export const pushService = {
    /**
     * web-push public 키
     * @returns public Key
     */
    getPushPublicKey:async () =>
        await axios.get(`${PUSH_API_URL}/public/key`),
}