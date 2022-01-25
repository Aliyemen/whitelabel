import Api from "@/lib/api";
import Axios from "axios";

// Api rest Site
export const setUser = ({ commit }, payload) => {
    commit("setUser", payload);
};

export const logOutFake = ({ commit }) => {
    commit("setUser", {name:null , token:null});
};

export const entrarFake = ({ commit }) => {
    commit("setUser", {name:'ED' , token:'jhdsjhdjs4sd5dsjds'});
};


export const apiGet = ({ commit }, payload) => {
    commit("setResponse", null);
    return Api.get(payload)
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};

export const apiPost = ({ commit }, payload) => {
    commit("setResponse", null);
    return Api.get("/", payload)
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};

export const apiPut = ({ commit }, payload) => {
    commit("setResponse", null);
    let { form, params } = payload;
    return Api.put("/", form, { params })
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};

export const apiPostFil = ({ commit }, payload) => {
    commit("setResponse", null);
    let { action, dataFile } = payload;
    return Api.get(action, dataFile, {
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};

// Axios para chamar backend das tela antigas da angular

export const apiGetAxios = ({ commit }, payload) => {
    commit("setResponse", null);
    const url = payload.url;
    delete payload.url;
    return Axios.get(url, payload)
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};

export const apiPostAxios = ({ commit }, payload) => {
    const url = payload.url;
    delete payload.url;
    return Axios.post(url, payload)
        .then(function(response) {
            commit("setResponse", response);
        })
        .catch(function(error) {
            throw error;
        });
};
