/**
 * Created by bjwsl-001 on 2017/6/14.
 */
$("#top").load("../tpl/register_header.html");
$("#nav").load("../tpl/nav.html");
$("#footer-content").load("../tpl/footer.html");

// 表单验证
(function () {
    var state = [0,0,0,0,0];
    var arr = ['vocal','query','method','get','post','html','css3','wyc123','vuejs','ionic','weex']
    var num = Math.floor(Math.random()*10);
    $(".captacha_img").attr('src','../img/captcha'+num+'.jpg')
    var help = $('.help-block');
    $(".captcha-reloader")[0].onclick= function () {
        var c=Math.floor(Math.random()*10)
        this.className='captcha-reloader loading';
        $(".captacha_img").attr('src','../img/captcha'+c+'.jpg')
        setTimeout(function () {
            $(".captcha-reloader")[0].className='captcha-reloader'
        },500)
        if(state.length >= 3){
            if(captacha.value!=""||captacha.value.toLowerCase()!=arr[num])
            help[4].innerHTML = "<i class='i_error'></i>";
        }
        num =  c;
    }

    function vali(txt,reg,i){
        if (reg.test(txt.value)) {
            help[i].innerHTML = "<i class='i_success'></i>";
            state[i]=1;
        }
        else {
            help[i].innerHTML = "<i class='i_error'></i>";
            state[i]=0;
        }
    };
    uname.onblur=function(){
        vali(this,/^[0-9A-Za-z]{6,16}$/,0);
    };
    pwd.onblur=function(){
        vali(this,/^[0-9A-Za-z]{6,16}$/,1);
    };
    pwd_repeat.onblur=function(){
        if(pwd.value==pwd_repeat.value&&(pwd.value!="")){
            help[2].innerHTML = "<i class='i_success'></i>";
            state[2]=1;
        }
        else {
            help[2].innerHTML = "<i class='i_error'></i>";
            state[2]=0;
        }
    }
    email.onblur=function(){
        vali(this,/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,3);
    };
    captacha.onblur=function () {
        if(captacha.value.toLowerCase()==arr[num]){
            help[4].innerHTML = "<i class='i_success'></i>";
            state[4]=1;

        }else{
            help[4].innerHTML = "<i class='i_error'></i>";
            state[4]=0;
        }
    }

    register_chk.onchange=function(){
        if(register_chk.checked==true){
            bt_login.disabled=false;
            
        }else if(register_chk.checked===false){
            bt_login.disabled=true;
        }
    };
    if(register_chk.checked===false){
        bt_login.disabled=true;
    }

    
    //表单提交
    bt_login.onclick=function(){
        for(var i=0,submitBool = 0;i<state.length;i++){
           submitBool+= state[i]
          
        }
        //console.log(submitBool);
        if(submitBool === 5){
            var n=uname.value;
            var p=pwd.value;
            var e=email.value;
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
                    if(result>0){
                        alert('注册成功');
                        uname.value = "";
                        pwd.value = "";
                        pwd_repeat.value = "";
                        email.value = "";
                        captacha.value = "";
                        for(var i=0;i<=4;i++){
                            help[i].innerHTML="";
                            state[i]=0
                        }
                        register_chk.checked=false;
                        bt_login.disabled=true;
                        $(".captacha_img").attr('src','../img/captcha'+(Math.floor(Math.random()*10))+'.jpg')
                    }
                    else{
                        alert('注册失败')
                    }
                }
            }
            xhr.open('POST','../data/user_register.php',true);
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(`uname=${n}&upwd=${p}&uemail=${e}`);
        }
    }
    
})()
