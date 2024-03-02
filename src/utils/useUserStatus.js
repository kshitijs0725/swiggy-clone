import { useEffect, useState } from "react"


const useUserStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState("offline");

    useEffect(()=>{
        if (navigator.onLine){
            setOnlineStatus("Online")
        }
        else{
            setOnlineStatus("Offline")
        }
    },[])

    return onlineStatus;

}
export default useUserStatus;