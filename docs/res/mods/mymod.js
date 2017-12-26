/** .-----------------------------------------------------------------------------------------------------------------
 * |  Github: https://github.com/Tinywan
 * |  Blog: http://www.cnblogs.com/Tinywan
 * |-------------------------------------------------------------------------------------------------------------------
 * |  Author: Tinywan(ShaoBo Wan)
 * |  DateTime: 2017/12/26 13:00
 * |  Mail: Overcome.wan@Gmail.com
 * '------------------------------------------------------------------------------------------------------------------*/

layui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
    var obj = {
        hello: function(str){
            alert('Layui Hello '+ (str||'mymod'));
        }
    };

    //输出test接口
    exports('mymod', obj);
});
