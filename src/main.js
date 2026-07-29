import Router from "./js/router/router.js";
import AuthService from "./js/services/auth.service.js";

window.addEventListener("DOMContentLoaded",async()=>{
    try{
        if(AuthService.restoreSession){
            await AuthService.restoreSession();
        }
    }catch(error){
        console.error(error);
    }
});
