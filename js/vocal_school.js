/**
 * Created by bjwsl-001 on 2017/6/5.
 */
(function () {
    //获取课程板块的ul
    var teach_video_ul= document.getElementsByClassName("course_list")[0];
    //获取教师板块的ul
    var teacher_list = document.getElementsByClassName("c_teacher_list")[0];
    //获取学生板块的ul
    var students = document.getElementsByClassName("student_list")[0];
    //获取文章板块的ul
    var main_ul = document.getElementsByClassName("main_ul")[0];
    //获取所有class为course_item_jump的a标记
    var aClick = document.getElementsByClassName("course_item_jump");
    //获取所有class为main_ul_course_a的a标记
    var main_aClick = document.getElementsByClassName("main_ul_course_a");
    //获取左右两个按钮
    var leftClick_1 = document.getElementsByClassName("mouse_left_btn")[0];
    var rightClick_1 = document.getElementsByClassName("mouse_right_btn")[0];
    var leftClick_2 = document.getElementsByClassName("mouse_left_btn")[1];
    var rightClick_2 = document.getElementsByClassName("mouse_right_btn")[1];
    var total = 200;
    //创建定时器
    var course =function () {
        //定义轮播移动速度
        var speed = -1.5;
        //判断偏移值 然后改变页码 如果超过5400就赋值为0
        if(teach_video_ul.offsetLeft<=0){
            aClick[3].className='course_item_jump';
            aClick[2].className='course_item_jump';
            aClick[1].className='course_item_jump';
            aClick[0].className='course_item_jump course_item_jump_active';
        }
        if(teach_video_ul.offsetLeft<=-1350){
            aClick[3].className='course_item_jump';
            aClick[2].className='course_item_jump';
            aClick[0].className='course_item_jump';
            aClick[1].className='course_item_jump course_item_jump_active';
        }
        if(teach_video_ul.offsetLeft<=-2700){
            aClick[3].className='course_item_jump';
            aClick[0].className='course_item_jump';
            aClick[1].className='course_item_jump';
            aClick[2].className='course_item_jump course_item_jump_active';
        }
        if(teach_video_ul.offsetLeft<=-4050){
            aClick[0].className='course_item_jump';
            aClick[2].className='course_item_jump';
            aClick[1].className='course_item_jump';
            aClick[3].className='course_item_jump course_item_jump_active';
        }
        if(teach_video_ul.offsetLeft<=-5400){
            aClick[3].className='course_item_jump';
            teach_video_ul.style.left='0';
        }
        //否则就将speed赋值给ul的left
        teach_video_ul.style.left=teach_video_ul.offsetLeft+speed+'px';

        if(students.offsetLeft<=0){
            aClick[9].className='course_item_jump';
            aClick[8].className='course_item_jump';
            aClick[7].className='course_item_jump';
            aClick[6].className='course_item_jump course_item_jump_active';
        }
        if(students.offsetLeft<=-1350){
            aClick[9].className='course_item_jump';
            aClick[8].className='course_item_jump';
            aClick[6].className='course_item_jump';
            aClick[7].className='course_item_jump course_item_jump_active';
        }
        if(students.offsetLeft<=-2700){
            aClick[9].className='course_item_jump';
            aClick[6].className='course_item_jump';
            aClick[7].className='course_item_jump';
            aClick[8].className='course_item_jump course_item_jump_active';
        }
        if(students.offsetLeft<=-4050){
            aClick[6].className='course_item_jump';
            aClick[8].className='course_item_jump';
            aClick[7].className='course_item_jump';
            aClick[9].className='course_item_jump course_item_jump_active';
        }
        if(students.offsetLeft<=-5400){
            aClick[9].className='course_item_jump';
            students.style.left='0';
        }
        //否则就将speed赋值给ul的left
        students.style.left=students.offsetLeft+speed+'px';
    };
    //启用定时器
    var timer = setInterval(course,25);
    //绑定鼠标进入事件
    c_course.onmouseenter= function () {
        clearInterval(timer);
        teach_video_ul.style.transition='.5s';
    };
    //绑定鼠标离开事件
    c_course.onmouseleave= function () {
        timer = setInterval(course,25);
        teach_video_ul.style.transition='0s';
    };
    //绑定鼠标进入事件
    student.onmouseenter= function () {
        clearInterval(timer);
        students.style.transition='.1s';
    };
    //绑定鼠标离开事件
    student.onmouseleave= function () {
        timer = setInterval(course,25);
        students.style.transition='0s';
    };
    //课程介绍板块左单击函数
    function c_leftClick(obj,num) {
        if(obj.offsetLeft<=1&&obj.offsetLeft>-1349){
            obj.style.left='-4050px'
            aClick[num-3].className='course_item_jump';
            aClick[num].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-1349&&obj.offsetLeft>-2699){
            obj.style.left='0px'
            aClick[num-2].className='course_item_jump';
            aClick[num-3].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-2699&&obj.offsetLeft>-4049){
            obj.style.left='-1350px'
            aClick[num-1].className='course_item_jump';
            aClick[num-2].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-4049&&obj.offsetLeft>-5399){
            obj.style.left='-2700px'
            aClick[num].className='course_item_jump';
            aClick[num-1].className='course_item_jump course_item_jump_active';
        }
    }
    //给左单击按钮绑定单击事件
    leftClick_1.onclick= function () {
        c_leftClick(teach_video_ul,3);
    };
    leftClick_2.onclick= function () {
        c_leftClick(students,9);
    };
    //课程介绍板块右单击函数
    function c_rightClick(obj,num) {
        if(obj.offsetLeft<=1&&obj.offsetLeft>-1350){
            obj.style.left='-1350px';
            aClick[num-3].className='course_item_jump';
            aClick[num-2].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-1349&&obj.offsetLeft>-2700){
            obj.style.left='-2700px'
            aClick[num-2].className='course_item_jump';
            aClick[num-1].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-2699&&obj.offsetLeft>-4050){
            obj.style.left='-4050px'
            aClick[num-1].className='course_item_jump';
            aClick[num].className='course_item_jump course_item_jump_active';
        }
        if(obj.offsetLeft<=-4049&&obj.offsetLeft>-5400){
            obj.style.left='-0px'
            aClick[num].className='course_item_jump';
            aClick[num-3].className='course_item_jump course_item_jump_active';
        }
    }
    //给右单击按钮绑定单击事件
    rightClick_1.onclick = function () {
        c_rightClick(teach_video_ul,3);
    };
    rightClick_2.onclick = function () {
        c_rightClick(students,9);
    };
    //课程介绍板块的页码单击函数
    function pageClick(obj,model){
        var page = obj.lastElementChild.innerHTML;
        if(model){
            if(page=="1"){
                teach_video_ul.style.left='0px';
                aClick[0].className='course_item_jump course_item_jump_active';
                aClick[1].className='course_item_jump';
                aClick[2].className='course_item_jump';
                aClick[3].className='course_item_jump';
            }
            if(page=="2"){
                teach_video_ul.style.left='-1350px';
                aClick[1].className='course_item_jump course_item_jump_active';
                aClick[0].className='course_item_jump';
                aClick[2].className='course_item_jump';
                aClick[3].className='course_item_jump';
            }
            if(page=="3"){
                teach_video_ul.style.left='-2700px';
                aClick[2].className='course_item_jump course_item_jump_active';
                aClick[0].className='course_item_jump';
                aClick[1].className='course_item_jump';
                aClick[3].className='course_item_jump';
            }
            if(page=="4"){
                teach_video_ul.style.left='-4050px';
                aClick[3].className='course_item_jump course_item_jump_active';
                aClick[0].className='course_item_jump';
                aClick[2].className='course_item_jump';
                aClick[1].className='course_item_jump';
            }
        }
        else{
            if(page=="1"){
                students.style.left='0px';
                aClick[6].className='course_item_jump course_item_jump_active';
                aClick[7].className='course_item_jump';
                aClick[8].className='course_item_jump';
                aClick[9].className='course_item_jump';
            }
            if(page=="2"){
                students.style.left='-1350px';
                aClick[7].className='course_item_jump course_item_jump_active';
                aClick[6].className='course_item_jump';
                aClick[8].className='course_item_jump';
                aClick[9].className='course_item_jump';
            }
            if(page=="3"){
                students.style.left='-2700px';
                aClick[8].className='course_item_jump course_item_jump_active';
                aClick[6].className='course_item_jump';
                aClick[7].className='course_item_jump';
                aClick[9].className='course_item_jump';
            }
            if(page=="4"){
                students.style.left='-4050px';
                aClick[9].className='course_item_jump course_item_jump_active';
                aClick[6].className='course_item_jump';
                aClick[8].className='course_item_jump';
                aClick[7].className='course_item_jump';
            }
        }
    }
    //遍历课程介绍板块的4个a对象
    for(var i = 0;i <= 3;i++){
        aClick[i].onclick = function (e) {
            var model=1;
            var result= e.target;
            if(result.tagName==="A"){
                pageClick(result,model)
            }
            else if(result.tagName==="I"){
                pageClick(result.parentNode,model)
            }

        }
    }
    //遍历学生介绍板块的4个a对象
    for(var i = 6;i <= 9;i++){
        aClick[i].onclick = function (e) {
            e.preventDefault();
            var model=0;
            var result= e.target;
            if(result.tagName==="A"){
                pageClick(result)
            }
            else if(result.tagName==="I"){
                pageClick(result.parentNode,model)
            }

        }
    }
    //创建第二个定时器
    var course2 =function () {
        //定义轮播移动速度
        var speed = -1.5;
        //判断偏移值 然后改变页码 如果超过5400就赋值为0
        if(teacher_list.offsetLeft<=-1350){
            aClick[4].className='course_item_jump c_teacher_item_jump';
            aClick[5].className='course_item_jump course_item_jump_active c_teacher_item_jump';
        }
        if(teacher_list.offsetLeft<=-1687){
            aClick[4].className='course_item_jump course_item_jump_active c_teacher_item_jump';
            aClick[5].className='course_item_jump c_teacher_item_jump';
            teacher_list.style.left='0';
        }
        //否则就将speed赋值给ul的left
        teacher_list.style.left=teacher_list.offsetLeft+speed+'px';
        total++;
        //console.log(total)
        if (main_ul.offsetTop == 0) {
            main_aClick[1].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a';
            main_aClick[0].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -470||main_ul.offsetTop == -469) {
            main_aClick[0].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a';
            main_aClick[1].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -940||main_ul.offsetTop == -939) {
            main_aClick[0].className = 'main_ul_course_a';
            main_aClick[1].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -1410||main_ul.offsetTop == -1409) {
            main_aClick[0].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a';
            main_aClick[1].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -1880||main_ul.offsetTop == -1879) {
            main_aClick[0].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a';
            main_aClick[1].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -2350||main_ul.offsetTop == -2349) {
            main_aClick[0].className = 'main_ul_course_a';
            main_aClick[2].className = 'main_ul_course_a';
            main_aClick[3].className = 'main_ul_course_a';
            main_aClick[4].className = 'main_ul_course_a';
            main_aClick[1].className = 'main_ul_course_a';
            main_aClick[5].className = 'main_ul_course_a main_ul_course_a_active';
        }
        if (main_ul.offsetTop == -2820||main_ul.offsetTop == -2819) {
            main_ul.style.top = '0';
        }
        if(total>=470) {
            main_ul.style.top = main_ul.offsetTop + (-total) + 'px';
            total = 200;
        }
    };
    //启动定时器2并赋值给timer1
    var timer1 = setInterval(course2,25);
    //绑定鼠标进入事件
    c_teacher.onmouseenter= function () {
        clearInterval(timer1);
        teacher_list.style.transition='.1s';
    };
    //绑定鼠标离开事件
    c_teacher.onmouseleave= function () {
        timer1 = setInterval(course2,25);
        teacher_list.style.transition='0s';
    };
    //教练介绍的页码单击函数
    function pageClick1(obj){
        var page = obj.lastElementChild.innerHTML;
        if(page=="1"){
            teacher_list.style.left='0px';
            aClick[4].className='course_item_jump course_item_jump_active c_teacher_item_jump';
            aClick[5].className='course_item_jump c_teacher_item_jump';
        }
        if(page=="2"){
            teacher_list.style.left='-1350px';
            aClick[5].className='course_item_jump course_item_jump_active c_teacher_item_jump';
            aClick[4].className='course_item_jump c_teacher_item_jump';
        }
    }
    //遍历教练介绍板块的2个a对象
    for(var i = 4;i <= 5;i++){
        aClick[i].onclick = function (e) {
            e.preventDefault();
            var result= e.target;
            if(result.tagName==="A"){
                pageClick1(result)
            }
            else if(result.tagName==="I"){
                pageClick1(result.parentNode)
            }

        }
    }
    //绑定鼠标进入事件
    mainMouse.onmouseenter= function () {
        clearInterval(timer1);
    };
    //绑定鼠标离开事件
    mainMouse.onmouseleave= function () {
        timer1 = setInterval(course2,25);
    };
    //文章板块的6个对象
    for(var i = 0;i <= 5;i++){
        main_aClick[i].onclick = function (e) {
            e.preventDefault();
            var result= e.target;
                pageClick2(result)
        }
    }
    //文章课程的页码单击函数
    function pageClick2(obj){
        var page = obj.lastElementChild.innerHTML;
            if(page=="1"){
                main_ul.style.top='0px';
                main_aClick[1].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a';
                main_aClick[0].className = 'main_ul_course_a main_ul_course_a_active';
            }
            if(page=="2"){
                main_ul.style.top='-470px';
                main_aClick[0].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a';
                main_aClick[1].className = 'main_ul_course_a main_ul_course_a_active';
            }
            if(page=="3"){
                main_ul.style.top='-940px';
                main_aClick[1].className = 'main_ul_course_a';
                main_aClick[0].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a main_ul_course_a_active';
            }
            if(page=="4"){
                main_ul.style.top='-1410px';
                main_aClick[1].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a';
                main_aClick[0].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a main_ul_course_a_active';
            }
            if(page=="5"){
                main_ul.style.top='-1880px';
                main_aClick[1].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a';
                main_aClick[0].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a main_ul_course_a_active';
            }
            if(page=="6"){
                main_ul.style.top='-2350px';
                main_aClick[1].className = 'main_ul_course_a';
                main_aClick[2].className = 'main_ul_course_a';
                main_aClick[3].className = 'main_ul_course_a';
                main_aClick[4].className = 'main_ul_course_a';
                main_aClick[0].className = 'main_ul_course_a';
                main_aClick[5].className = 'main_ul_course_a main_ul_course_a_active';
            }
    }

    //登录功能
    var login = document.getElementsByClassName('register_inner')[0];
    var mask = document.getElementsByClassName('mask_layer')[0];
    var close = document.getElementsByClassName('login_close')[0];
    login.onclick = function () {
        clearInterval(timer);
        clearInterval(timer1);
        mask.style="display:block";
        vocal_login.style="display:block";
        document.body.style="overflow-y:hidden"
    }
    close.onclick = function () {
        mask.style="display:none";
        document.body.style="";
        vocal_login.style="display:none";
        timer1 = setInterval(course2,25);
        timer = setInterval(course,25);
    }

    //ajax表单验证
    user_btn.onclick = function(){
            var n = username.value;
            var p = userpwd.value;
            var xhr = null;
            if(window.XMLHttpRequest){
            var xhr = new XMLHttpRequest();
            } 
            else{
                xhr = new ActiveXObject('Microsoft.XMLHttp');
            }
            //调用Ajax
            xhr.onreadystatechange = function(){
                if(xhr.readyState===4&&xhr.status===200){
                    var result = xhr.responseText;
                    console.log(result);
                   result=  JSON.parse(result)
                    if(result.code===200){
                        alert('登录成功！即将跳转到用户中心');
                        mask.style="display:none";
                        document.body.style="";
                        vocal_login.style="display:none";
                        timer1 = setInterval(course2,25);
                        timer = setInterval(course,25);
                        login.parentElement.innerHTML="<div class='user_main'><a><i class='i_register'></i>用户</a></div>"

                    //location.href = 'usercenter.html';
                    }else {
                        alert('登录失败！错误原因：'+result.msg);
                    }
                }
            } 
            xhr.open('POST','data/user_login.php',true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send(`uname=${n}&upwd=${p}`);
    }

})();

