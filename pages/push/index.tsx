import { pushService } from "@/service/push/Push";
import { useEffect,  useState } from "react";
import webpush from "web-push";

const push = () => {

  const [isSuccess, setIsSuccess] = useState<boolean>();

  const onPublicKey = async () => {
    const result = await pushService.getPushPublicKey();
    if(result.data?.publicKey){
      setIsSuccess(result.data?.publicKey !== null);
      webpush.setGCMAPIKey(result.data?.publicKey);
    }
  }
  const onPushClick = async () => {
    await fetch("/api/push", {method:"POST"});
  }

  const onServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("./service-worker.js");
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  }

  useEffect(()=>{
    onServiceWorker();
  },[]) 

  return (
    <>
      <div>
        Service Worker
      </div>
      <div>
        <div>key : {isSuccess? "Success!" : ""}</div>
        <button onClick={onPublicKey}>
          get Public Key
        </button>
      </div>
      <div>
        <button onClick={onPushClick}>
          push 테스트
        </button>
      </div>
    </>
  )
};
export default push;
