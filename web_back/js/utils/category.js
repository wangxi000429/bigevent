
//文章类别
var category = {
    show : function(callBack) {
        $.get(URLIST.category_show , function(res) {
            callBack(res);
        });
    },
    add : function(name,slug,callBack) {
        $.post(URLIST.category_add,{name:name,slug:slug},function(res) {
            callBack(res);
        });
    }

}