import request from '@/utils/request';
import store from '@/store'

//注册
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password },
  });
};

//获取用户信息
export const getUserInfo = () => {
  return request({
    url: "/user",
    method: "GET",
    headers: {
      // 注意改接口需要授权才能访问
      //传token
      authorization: `${store.state.user.token}`,
    },
  });
};

//获取收藏
export const getShou=()=>{
  return request({
    url:'/user/favorites',
    method:'get',
    headers: {
      // 注意改接口需要授权才能访问
      //传token
      authorization: `${store.state.user.token}`,
    },
  })
}

//查看已发布房源


export const getHouse = () => {
  return request({
    url: "/user/houses",
    method: "GET",
    headers: {
      // 注意改接口需要授权才能访问
      //传token
      authorization: `${store.state.user.token}`,
    },
  });
};

//查询房屋具体
export const getAllHouse = id => {
  return request({
    method: 'get',
    url: `/houses/${id}`,
  });
};
