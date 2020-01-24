const host = 'https://music.163.com'
function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      },
      fail: function (res) { 
      },
      complete: function () {
      }
    })
  })
}
function get (obj) {
  return request(obj.url, 'GET', obj.data)
}
function post (obj) {
  return request(obj.url, 'POST', obj.data)
}
export default {
  request,
  get,
  post,
  host
}
