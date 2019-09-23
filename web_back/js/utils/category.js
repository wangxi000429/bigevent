
//文章类别
var category = {
    show : function(callBack) {
        $.get(URLIST.category_show , function(res) {
            callBack(res);
        })
    }

}