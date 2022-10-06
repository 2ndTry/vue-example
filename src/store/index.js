import { createStore } from "vuex";
import { postModul } from "./postModul";

export default createStore({
    modules: {
        post: postModul
    }
})