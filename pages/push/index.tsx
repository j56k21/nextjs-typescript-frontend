import { IPushMessage } from "@/interface/push/pust";
import { pushService } from "@/service/push/Push";
import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect,    useState } from "react";
import webpush from "web-push";

const push = () => {

  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [subscribe, setSubscribe] = useState<Boolean>(false);
  const [publicKey, setPublicKey] = useState<String>(""); 
  const [title, setTitle] = useState<string>("");
  
  const [message, setMessage] = useState<String>("");

  const onPublicKey = async () => {
    const result = await pushService.getPushPublicKey();
    if(result.data?.publicKey){
      setIsSuccess(result.data?.publicKey !== null);
      setPublicKey(result.data.publicKey);
      webpush.setGCMAPIKey(result.data.publicKey);
    }
  }
  const onPushClick = async () => {
    const parma:IPushMessage = {
      title : title || "Test Push Title",
      message : message || "Test Push Message"

    }
    pushService.postPushSend(parma);
    //("/api/push/send", {method:"POST"});
  }

  const onServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
         await navigator.serviceWorker.register("./service-worker.js");
        
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  }


  // 구독
  const onSubScribe = async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    setSubscribe(!!(await registration?.pushManager.getSubscription()));
    if(!subscribe){
      const notificationPermission = await Notification.requestPermission();

      if (notificationPermission === "granted") {
        const registration = await navigator.serviceWorker.getRegistration(); 
        
     
        const subscription = await registration?.pushManager?.subscribe({
          userVisibleOnly: true,
          applicationServerKey: String(publicKey),
        });
  
        if (subscription) {
          setSubscribe(true);
          await pushService.postSubscription(subscription);
          // MessageEndpoint.subscribe(JSON.parse(JSON.stringify(subscription)));
        }
      } 
    }
  }
    const  onUnSubScribe = async () => {
      const registration = await navigator.serviceWorker.getRegistration();
      const subscription = await registration?.pushManager.getSubscription();
      
      if (subscription) {
        await subscription.unsubscribe();
        // await MessageEndpoint.unsubscribe(subscription.endpoint);
        
        await pushService.postUnSubscription(JSON.parse(JSON.stringify(subscription)).endpoint);
        setSubscribe(false);
      }

    }
  
    const onChange = (event:any) => {
      const value = event.target.value;
      switch(event.target.id){
        case"title":
          setTitle(value);
          break;
        case"message":
          setMessage(value);
          break;
        default :
      }
    };
    

  

  useEffect(()=>{
    onServiceWorker();
    onPublicKey();
  },[]) 

  return (
    <>
      <div>
        Service Worker : {String(subscribe)}
      </div>
      <button onClick={onSubScribe}>subscribe</button>
      <button onClick={onUnSubScribe}>unSubscribe</button>
      <div>
        <div>key : {isSuccess? "Success!" : ""}</div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <div>
        
        title : <TextField sx={{width:"200px", paddingBottom:"10px"}} onChange={onChange} id="title"/>
        <br/>
        <br/>
        message : <TextField sx={{width:"1000px"}} onChange={onChange} id="message"/>
        <br/>
        <br/>
        <button onClick={onPushClick}>
          push 테스트
        </button>
      </div>
    </>
  )
};
export default push;
