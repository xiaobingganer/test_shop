// 包含n个接口请求函数的模块
import ajax from "./ajax"
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/shops', {
  longitude,
  latitude
})


// 4.根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (longitude, latitude) => ajax('/search_shops', {
  longitude,
  latitude
})

// 5.获取一次性验证码
export const reqYzm = () => ajax('/captcha')


// 6、用户名密码登陆
export const reqDlu = (name, pwd, captcha) => ajax('/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
