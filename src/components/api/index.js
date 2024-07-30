import axios from "axios";

const main_url= axios.create({
    baseURL:'https://carraces.pythonanywhere.com/api/v1'
})

main_url.interceptors.request.use((req) => {
    let token =localStorage.getItem("token")

    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;                                                                                                                        
  });
export default main_url;