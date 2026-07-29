const Router={

    go(page){
        window.location.href=`./${page}.html`;
    },

    replace(page){
        window.location.replace(`./${page}.html`);
    },

    current(){
        return location.pathname.split("/").pop().replace(".html","");
    }

};

export default Router;
