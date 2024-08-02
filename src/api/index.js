import axios from "axios";
const Main_Url = axios.create({
    baseURL: 'https://carraces.pythonanywhere.com/api/v1' 
})
Main_Url.interceptors.request.use((req) => {
    let token =localStorage.getItem("token")
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;                                                                                                                        
  });
export default Main_Url;