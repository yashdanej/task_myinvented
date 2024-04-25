import axios from "axios";

export const changeText = (e, set, state,  setParam=false) => {
    if(typeof(state)=="object"){
        set({...state, [e.target.name]: e.target.value});
    }else{
        set(e.target.value)
    }
    if(setParam){
        setParam({hsncode: e.target.value});
    }
}

export const api = async (pathname, method, body, formData=false, includeCredentials = false) => {
    const axiosConfig = {
        url: `http://localhost:8000/${pathname}`,
        method: method,
    };
    if(body){
        if(formData){
            const data = new FormData();
            for (const key in body) {
              if (body.hasOwnProperty(key)) {
                  data.append(key, body[key]);
              }
            }
            console.log('data', data);
            axiosConfig.data = data;
        }else{
            axiosConfig.data = body;
        }
    }
    if (includeCredentials) {
        axiosConfig.withCredentials = true;
    }

    return await axios(axiosConfig)
        .then((res) => res)
        .catch((e) => {
            console.log('inside: ', e);
            return e;
        });
};