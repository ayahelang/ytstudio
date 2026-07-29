import Router from "./router/router.js";
import AuthService from "./js/services/auth.service.js";

window.addEventListener("DOMContentLoaded",async()=>{

    await AuthService.restoreSession();

    Router.start();

});
