import { IPushMessage } from "@/interface/push/pust";
import axios from "axios";

const PUSH_API_URL = '/api/push';


export const pushService = {
    /**
     * web-push public 키
     * @returns public Key
     */
    getPushPublicKey:async () =>
        await axios.get(`${PUSH_API_URL}/public/key`),

    postSubscription:async (subscribe : PushSubscription)=>{
        await axios.post(`${PUSH_API_URL}/subscription`, {data:subscribe});
    },

    postUnSubscription:async (subscribe : String)=>{
        await axios.post(`${PUSH_API_URL}/unsubscription`, {data:subscribe});
    },

    postPushSend:async(data:IPushMessage)=>{
        await axios.post(`${PUSH_API_URL}/send`, {title : data.title, message: data.message});
    },
}