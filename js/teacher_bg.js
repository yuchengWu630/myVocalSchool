/**
 * Created by YuCheng.Wu on 2017/5/30.
 */
//常用的范围随机数方法
function rn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//常用的范围随机颜色方法
function rc(min, max) {
    var r = rn(min, max);
    var g = rn(min, max);
    var b = rn(min, max);
    return `rgb(${r}, ${g}, ${b})`;
}


//页面svg背景生产事件
(function(){
    for(var i=0; i<60; i++){
        var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        var h = c_teacher_bg.clientHeight;
        var w = screen.width;
        c.setAttribute('r', rn(30,60));//半径
        c.setAttribute('cx', rn(0,w));//圆心X
        c.setAttribute('cy', rn(0,h));//圆形Y
        c.setAttribute('fill', rc(150,250));//填充色
        c.setAttribute('fill-opacity', Math.random()); //填充透明度
        c_teacher_bg.appendChild(c);

        //为每个圆形添加事件绑定
        c.onmouseenter = function(){
            var that = this;  //保留事件源的引用
            that.onmouseenter = null;  //让圆形只能点一次
            var t = setInterval(function(){
                //修改圆形半径，每次变大5%
                var r = that.getAttribute('r');
                var p = that.getAttribute('fill-opacity');
                r *= 1.05; //隐式的浮点数解析
                //修改圆形透明度，每次减小5%
                p *= 0.95;
                that.setAttribute('r',r);
                that.setAttribute('fill-opacity', p);

                if(p<=0.001){  //已经透明几乎看不见了
                    clearInterval(t);
                    c_teacher_bg.removeChild(that);
                    //从DOM上删除圆形
                }

            },1);
        }
    }
})();


