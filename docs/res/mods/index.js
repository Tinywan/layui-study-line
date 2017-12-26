/** .-----------------------------------------------------------------------------------------------------------------
 * |  Github: https://github.com/Tinywan
 * |  Blog: http://www.cnblogs.com/Tinywan
 * |-------------------------------------------------------------------------------------------------------------------
 * |  Author: Tinywan(ShaoBo Wan)
 * |  DateTime: 2017/12/26 10:20
 * |  Mail: Overcome.wan@Gmail.com
 * '------------------------------------------------------------------------------------------------------------------*/

/**
 项目JS主入口
 以依赖layui的layer和form模块为例
 **/
layui.define(['layer', 'form'], function(exports){
    var layer = layui.layer
        ,form = layui.form;

    layer.msg('Hello World 模块化的用法（推荐）');

    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});