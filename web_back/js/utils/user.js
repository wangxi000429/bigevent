//管理员模块： 所有与管理员相关的功能全写在这里
var user = {
  /**
   * 管理员登录
   * @param {*} userName 用户名
   * @param {*} password 密码
   * @param {*} callBack 回调函数
   */
  login: function (userName, password, callBack) {
    $.post(URLIST.user_login, {
        user_name: userName,
        password: password
      },
      function (res) {
        //res是本次请求 从服务器中取回的数据
        debugger;
        callBack(res);
      });
  },
  logout: function (callBack) {
    $.post(URLIST.user_logout, function (res) {
      callBack(res);
    });
  },
  getInfo:function(callBack){
    $.get(URLIST.user_info,function(res) {
      callBack(res);
    })
  }

}




// var user = {
//   
//   login: function(userName, password, callBack) {
//     // alert(userName + password);
//     $.post(URLIST.user_login, { user_name: userName, password: password }, function(res) {
//       // res 是本次请求，从服务器回来的数据
//       callBack(res);
//     });
//   },

//   logout: function(callBack) {
//     $.post(URLIST.user_logout, function(res) {
//       callBack(res);
//     });
//   },

//   getInfo: function(callBack) {
//     $.get(URLIST.user_info, function(res) {
//       callBack(res);
//     });
//   }
// };