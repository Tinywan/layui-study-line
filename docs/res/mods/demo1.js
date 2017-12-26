/** .-----------------------------------------------------------------------------------------------------------------
 * |  Github: https://github.com/Tinywan
 * |  Blog: http://www.cnblogs.com/Tinywan
 * |-------------------------------------------------------------------------------------------------------------------
 * |  Author: Tinywan(ShaoBo Wan)
 * |  DateTime: 2017/12/26 13:03
 * |  Mail: Overcome.wan@Gmail.com
 * |  Function: 使用Layui的form和upload模块
 * '------------------------------------------------------------------------------------------------------------------*/

layui.use(['form','upload'],function () { //如果只加载一个模块，可以不填数组。如：layui.use('form')
    var form = layui.form       //获取form模块
        ,upload = layui.upload; //获取upload模块

    // 监听提交按钮
    form.on('submit(test)',function (data) {
        console.log(data);
    });

    //实例化一个上传控件
    upload({
        url:"",
        success:function (data) {
            console.log(data);
        }
    });
});