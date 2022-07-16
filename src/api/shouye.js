import request from '@/utils/request';

export const locaTion = (data) => {
  return request({
    url: `/area/city?level=${data}`,
  });
};

export const locaHot=()=>{
    return request({
        url:'/area/hot'
    })
}
