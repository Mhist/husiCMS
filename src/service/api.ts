import Axios from 'axios'
const axios:any = Axios.create({
    baseURL: 'http://119.91.213.59',
    timeout: 3000,
    headers: {
       //添加数据头为json
    'Content-Type':'application/json',
    'Authorization': "AUTH_TOKEN",
  }
      
  
  });

export default axios
