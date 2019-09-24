var article = {
    /**
     * 
     * @param {*} param  {key:'abc', type:1,state:'草稿'}
     * @param {*} callBack 
     */
    show : function(param,callBack) {
        $.get(URLIST.article_show, param, function(res) {
            callBack(res);
          });
    },
    del: function(id, callBack) {
        $.get(URLIST.article_del, { id: id }, function(res) {
          callBack(res);
        });
    },
    // add : function(fd,callBack) {
       
    // }
}