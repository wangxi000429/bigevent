//文章类别
var category = {
    show: function (callBack) {
        $.get(URLIST.category_show, function (res) {
            callBack(res);
        });
    },
    /**
     * 
     * @param {*} name 名称
     * @param {*} slug 别名
     * @param {*} callBack 回调
     */
    add: function (name, slug, callBack) {
        $.post(URLIST.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        });
    },
    del: function (id, callBack) {
        $.post(URLIST.category_del, {
            id: id
        }, function (res) {
            callBack(res);
        });
    },
    /**
     * 
     * @param {*} id  
     * @param {*} name 名称
     * @param {*} slug 别名
     * @param {*} callBack 回调
     */
    edit: function (id, name, slug, callBack) {
        $.post(URLIST.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        });
    }

}