import axios from 'axios'

export function request(config){
  //创建axios示例
  const instance1=axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })


  //请求/响应 拦截器
  instance1.interceptors.request.use(config =>{
    //console.log(config);
    //1.比如config中的一些信息不符合服务器的要求

    //2.比如每次发送网络请求是，都希望在界面中显示一个请求图标

    //3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
    return config
  },err =>{
    //console.log(err);
  })

  //响应拦截
  instance1.interceptors.response.use(res =>{
    //console.log(res);
    return res.data
  },err => {
    console.log(err);
  })

  //   发送真正的网络请求
  return instance1(config)//instance返回的就是promise对象
}

