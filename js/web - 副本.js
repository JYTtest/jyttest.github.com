function toDou(iNum){
    return iNum<10?'0'+iNum:''+iNum;
}
function rnd(n,m){
    return parseInt(Math.random()*(m-n))+n;
};
function d2a(n){
    return n*Math.PI/180;
}


function getpos(obj){
    var l=0;
    var h=0;
    while(obj){
        l+=obj.offsetLeft;
        h+=obj.offsetTop;
        obj=obj.offsetParent
    }
    return {left:l,top:h}
}
window.onload= function () {

    /*home_无缝滚动*/
    //;(function () {
    //    var oHome=document.querySelector('.home');
    //    var oPic=document.querySelector('.pic_box');
    //    var oPrev=document.querySelector('.prev');
    //    var oNext=document.querySelector('.next');
    //    var oUl=oPic.children[0];
    //    var oOl=oPic.children[1];
    //    var aLi=oUl.children;
    //    var aBtn=oOl.children;
    //    var n = 0;
    //    var timer =null;
    //    oUl.innerHTML+=oUl.innerHTML;
    //    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    //    for(var i =0; i<aBtn.length;i++){
    //        (function(index){
    //            aBtn[i].onclick=function(){
    //                if((n%5==4 || n%5==-1)&&index==0){
    //                    n++;
    //                }
    //                if(n%5==0&&index==aBtn.length-1){
    //                    n--;
    //                }
    //                n=Math.floor(n/aBtn.length)*aBtn.length+index;
    //                tab();
    //            };
    //        })(i);
    //    }
    //    function tab(){
    //        for(var i=0;i<aBtn.length;i++){
    //            aBtn[i].className=''
    //        }
    //        aBtn[(n%5+5)%5].className='active';
    //        startmove(oUl,-n*aLi[0].offsetWidth);
    //
    //    }
    //    oPrev.onclick=function(){
    //        n--;
    //        tab();
    //    };
    //    oNext.onclick=function(){
    //        n++;
    //        tab();
    //        document.title=n;
    //    };
    //    var left = 0;
    //    var w = oUl.offsetWidth/2;
    //    function startmove(obj,target){
    //        clearInterval(timer);
    //        var start = left;
    //        var dis = target-start;
    //        var count = Math.floor(500/30);
    //        var i = 0;
    //        timer=setInterval(function(){
    //            i++;
    //            var a = i/count;
    //            var cur = start+dis*a*a*a;
    //            left=cur;
    //            obj.style.left=(left%w-w)%w+'px';
    //            if(i==count){
    //                clearInterval(timer)
    //            }
    //        },50)
    //    }
    //})();

   ;(function () {
        var oBox = document.querySelector('.home ol');
        var aBtn = oBox.getElementsByTagName('li');
        var aDiv = document.querySelectorAll('.pic_box ul li');
        var oL = document.querySelector('.prev');
        var oR = document.querySelector('.next');
        var n = 0;
        var timer=null;
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].index=i;
            aBtn[i].onclick=function(){
                n = this.index;
                tab();
            };
        }
        oR.onclick=function(){
            n++;
            if(n==4){
                n=0;
            }
            tab();

        };
        timer=setInterval(function(){
            n++;
            if(n==4){
                n=0;
            }
            tab();
        },2000);
        function tab(){
            for(var i=0;i<aBtn.length;i++){
                aBtn[i].className='';
                aDiv[i].style.display='none';
            }
            aBtn[n].className='on';
            aDiv[n].style.display='block';
        }
        oBox.onmouseover=function(){
            clearInterval(timer);
        };
        oBox.onmouseout=function(){
            timer=setInterval(function(){
                n++;
                if(n>4){
                    n=0;
                }
                tab();
            },2000);
        };

    })()



    /*页面跳转*/
    ;(function () {
        var oBox=document.querySelector('.list');
        var aA=oBox.getElementsByTagName('li');
        var timer=null;
        var arr=[0,670,1570];

        for(var i=0;i<aA.length;i++){
            aA[i].index=i;
            aA[i].onclick=function(){
                var _this=this;
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                    var start=scrollTop;
                    var dis=arr[_this.index]-start;
                    var count=parseInt(1000/20);
                    var n=0;
                    clearInterval(timer);
                    timer=setInterval(function(){
                        n++;
                        var a=1-n/count;
                    var cur=start+dis*(1-a*a*a);
                    document.documentElement.scrollTop=document.body.scrollTop=cur;
                    if(n==count){
                        clearInterval(timer);
                    }
                },30);
            };

        };

    })()
    /*下*/
    ;(function () {
        var oDown=document.getElementById('down');
        var timer=null;
        oDown.onclick= function () {
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var start=scrollTop;
            var dis=670-start;
            var count=parseInt(1000/20);
            var n=0;
            clearInterval(timer);
            timer=setInterval(function(){
                n++;
                var a=1-n/count;
                var cur=start+dis*(1-a*a*a);
                document.documentElement.scrollTop=document.body.scrollTop=cur;
                if(n==count){
                    clearInterval(timer);
                }
            },30);
        }
    })();

    /*吸顶条*/
    ;(function () {
        var oItem=document.getElementById('itembar');
        var oItem2=document.getElementById('itembar2');
        var top=oItem.offsetTop;
        document.onscroll=function(){
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollTop>top){
                oItem.style.position='fixed';
                oItem.style.top='0';
                oItem.style.left='0';
                oItem2.style.display='block';
            }else {
                oItem.style.position='static';
                oItem2.style.display='none';
            }
        }
    })();

    //钢琴
    ;(function () {
        var oA = document.querySelector('.audio1');
        var oAa = document.querySelector('.audio2');
        var aLi = document.querySelectorAll('.piano ul li');

        document.onkeydown = function(ev){
            if(ev.keyCode>=49&&ev.keyCode<=56){
                aLi[ev.keyCode-49].className = 'on';
                oA.src = oggSound['sound'+ev.keyCode];
                oA.play();
                oAa.pause();
            }
        };
        document.onkeyup = function(ev){
            if(ev.keyCode>=49&&ev.keyCode<=56){
                aLi[ev.keyCode-49].className = '';
            }
        };


    })()

    /*音乐播放器*/
    ;(function () {
        var arr = ['Whistle','The Show','脸红的思春期','Do You Know Where You are Going To','多幸运 ','Nothing On You','儿时 ','浪漫惊喜 ','什么也不是'];
        var aLi = document.querySelectorAll('.piano ul li');
        var oA = document.querySelector('.audio1');
        var oAa = document.querySelector('.audio2');
        var iNow = 0;
        for(var i=0;i<aLi.length;i++){
            ;(function(index){
                aLi[i].ondblclick = function(){
                    iNow = index;
                    tab();
                    oAa.pause();
                    oAa.currentTime = 0;
                };
            })(i);
        }
        function tab(){
            oA.src = 'music/'+arr[iNow]+'.mp3';
            oA.play();

        };
    })();

    /*暂停*/
    ;(function () {
        var oStop=document.querySelector('.stop');
        var aAudio=document.querySelectorAll('audio');
        var oA=document.querySelector('.audio2');
        //for(var i=0; i<aAudio.length;i++) {
        //    oA.play();
        //}
        var Block=true;
        oStop.onclick=function(){
            if(Block){
                for(var i=0; i<aAudio.length;i++){
                    aAudio[i].pause();
                    Block=false;
                }
            }else {
                //for(var i=0; i<aAudio.length;i++) {
                oA.play();
                Block = true;
                //}
            }

        };


    })();

    /*personal信息*/
    ;(function () {
        var aBtn = document.querySelectorAll('.personal .about_list');
        var aBox = document.querySelectorAll('.personal .basic');
        var aClose = document.querySelectorAll('.personal .close_btn');
        for(var i=0;i<aBtn.length;i++){
            (function(index){
                aBtn[index].onclick = function() {
                    for (var i = 0; i < aBox.length; i++) {
                        aBox[index].style.display = 'block';
                        aBox[index].style.WebkitTransition = '1s all ease';

                        setTimeout(function () {
                            aBox[index].style.opacity = 1;
                            aBox[index].style.WebkitTransform = 'scale(1,1)';
                        }, 5);
                    };
                }
            })(i)
        }
        for(var i=0;i<aClose.length;i++){
            (function(index){
                aClose[i].onclick = function () {
                    aBox[index].style.opacity = 0;
                    aBox[index].style.WebkitTransform = 'scale(4,4)';
                    aBox[index].style.display = 'none';
                };
            })(i)
        }
    })();

    /*屏保*/
    ;(function () {
        var oC = document.getElementById('c1');
        oC.width = document.documentElement.clientWidth;
        var gd = oC.getContext('2d');
        var N = 4;
        var aPoint = [];
        for(var i=0;i<N;i++){
            aPoint.push({
                x:rnd(0,oC.width),
                y:rnd(0,oC.height),
                iSpeedX:rnd(-10,10),
                iSpeedY:rnd(-10,10)
            });
        }

        var COUNT = 20;
        var aOldPoint = [];

        //运动、画点
        setInterval(function(){
            gd.clearRect(0,0,oC.width,oC.height);

            //运动
            for(var i=0;i<aPoint.length;i++){

                if(aPoint[i].x<0){
                    aPoint[i].iSpeedX*=-1;
                }
                if(aPoint[i].y<0){
                    aPoint[i].iSpeedY*=-1;
                }
                if(aPoint[i].x>oC.width){
                    aPoint[i].iSpeedX*=-1;
                }
                if(aPoint[i].y>oC.height){
                    aPoint[i].iSpeedY*=-1;
                }



                aPoint[i].x+=aPoint[i].iSpeedX;
                aPoint[i].y+=aPoint[i].iSpeedY;
            }


            //画点
            for(var i=0;i<aPoint.length;i++){
                drawPoint(aPoint[i]);
            }

            //连线
            gd.beginPath();
            gd.moveTo(aPoint[0].x,aPoint[0].y);
            for(var i=1;i<aPoint.length;i++){
                gd.lineTo(aPoint[i].x,aPoint[i].y);
            }
            gd.closePath();
            gd.strokeStyle = '#fff';
            gd.stroke();


            var arr = [];
            for(var i=0;i<aPoint.length;i++){
                arr.push({
                    x:aPoint[i].x,
                    y:aPoint[i].y,
                    iSpeedX:aPoint[i].iSpeedX,
                    iSpeedY:aPoint[i].iSpeedY
                });
            }
            aOldPoint.push(arr);
            if(aOldPoint.length>COUNT){
                aOldPoint.shift();
            }
            //画老点
            gd.beginPath();
            for(var i=0;i<aOldPoint.length;i++){
                gd.moveTo(aOldPoint[i][0].x,aOldPoint[i][0].y);
                for(var j=1;j<aOldPoint[i].length;j++){
                    gd.lineTo(aOldPoint[i][j].x,aOldPoint[i][j].y);
                }
                gd.closePath();
                gd.strokeStyle = 'rgba(255,255,255,'+(i/aOldPoint.length/3)+')';
                gd.stroke();
            }



        },16);

        function drawPoint(oPoint){
            gd.beginPath();
            gd.fillStyle = '#fff';
            gd.fillRect(oPoint.x,oPoint.y,1,1);
        }
    })()

    //作品展示
    ;(function () {
        var oRight = document.querySelector('.prev_btn');
        var oLeft = document.querySelector('.next_btn');
        var oZns = document.querySelector('.wor_book');
        var aLi = oZns.children;
        var aImg = oZns.getElementsByTagName('img');
        var aPos = [];


        for(var i=0;i<aLi.length;i++){
            aPos.push({
                "left":aLi[i].offsetLeft,
                "top":aLi[i].offsetTop,
                "opacity":getStyle(aImg[i],'opacity'),
                "imgW":aImg[i].offsetWidth,
                "imgT":aImg[i].offsetTop,
                "fnClick":aLi[i].onclick
            });
        }
        oRight.onclick = toRight;
        function toRight(){
            aPos.push(aPos.shift());
            change();
        };
        oLeft.onclick = toLeft;
        function toLeft(){
            aPos.unshift(aPos.pop());
            change();
        };
        function change(){
            for(var i=0;i<aLi.length;i++){
                doMove(aLi[i],{left:aPos[i].left,top:aPos[i].top});
                doMove(aImg[i],{top:aPos[i].imgT,width:aPos[i].imgW,opacity:aPos[i].opacity});
                aLi[i].onclick = aPos[i].fnClick;
            }
        }
    })()

    /*图片墙*/
    ;(function () {
        var oShow2=document.querySelector('.show2_main');
        var aImg=oShow2.children;
        for(var i=0;i<aImg.length;i++){
            aImg[i].style.left=rnd(0,oShow2.offsetWidth-150)+'px';
            aImg[i].style.top=rnd(0,oShow2.offsetHeight-150)+'px';
            aImg[i].setAttribute('drag','true');
        }
        oShow2.onmousedown=function(ev) {
            var oEvent = ev || event;
            var oSrc = oEvent.srcElement || oEvent.target;
            if (oSrc.getAttribute('drag') == 'true') {
                var disX = oEvent.pageX - oSrc.offsetLeft;
                var disY = oEvent.pageY - oSrc.offsetTop;
                document.onmousemove = function (ev) {
                    var oEvent = ev || event;
                    var l=oEvent.pageX - disX;
                    var t= oEvent.pageY - disY;

                    if(l<0){
                        l=0;

                    }

                    else if(l>oShow2.offsetWidth-aImg[0].offsetWidth){
                        l=oShow2.offsetWidth-aImg[0].offsetWidth;
                    }
                     if(t<0){
                        t=0;
                    }
                    else if(t>oShow2.offsetHeight-aImg[0].offsetHeight){
                        t=oShow2.offsetHeight-aImg[0].offsetHeight;
                    }
                    oSrc.style.left = l + 'px';
                    oSrc.style.top = t+ 'px';
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null
                };
                oShow2.releaseCapture && oShow2.releaseCapture()
            };
            oShow2.setCapture &&oShow2.setCapture();
            return false;
        }
    })();

    /*穿墙*/
    function a2d(n){
        return n*180/Math.PI;
    }
    ;(function () {
        function hoverDir(ev,obj){
            var a = ev.pageX-getpos(obj).left-obj.offsetWidth/2;
            var b = getpos(obj).top+obj.offsetHeight/2-ev.pageY;

            return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
        }
        function through(obj){
            var oS = obj.children[0];
            obj.onmouseenter = function(ev){
                console.log(getpos(obj).left,getpos(obj).top)
                var oEvent = ev||event;
                var dir = hoverDir(oEvent,obj);
                console.log(dir);
                switch(dir){
                    case 0:
                        //左
                        oS.style.left = '-220px';
                        oS.style.top = 0;
                        break;
                    case 1:
                        //下
                        oS.style.left = 0;
                        oS.style.top = '180px';
                        break;
                    case 2:
                        //右
                        oS.style.left = '220px';
                        oS.style.top = 0;
                        break;
                    case 3:
                        //上
                        oS.style.left = 0;
                        oS.style.top = '-180px';
                        break;
                }
                move(oS,{left:0,top:0});
            };
            obj.onmouseleave = function(ev){
                var oEvent = ev||event;
                var dir = hoverDir(oEvent,obj);
                switch(dir){
                    case 0:
                        move(oS,{left:-220,top:0});
                        break;
                    case 1:
                        move(oS,{left:0,top:180});
                        break;
                    case 2:
                        move(oS,{left:220,top:0});
                        break;
                    case 3:
                        move(oS,{left:0,top:-180});
                        break;
                }
            };
        }

        var aLi = document.querySelectorAll('.chuans ul li');
        var aChuan=document.querySelectorAll('.chuan1');
        var oClose=document.querySelector('#chuan_close');
        for(var i=0;i<aLi.length;i++){
            (function(index){
                through(aLi[i]);
                aLi[i].onclick= function () {
                    for(var i=0;i<aChuan.length;i++){
                        aChuan[index].style.display='block';
                        oClose.style.display = 'block';
                    }
                }
            })(i)
        }
        oClose.onclick= function () {
            for (var i = 0; i < aChuan.length; i++) {
                aChuan[i].style.display='none';
                oClose.style.display = 'none';
            }
        }
    })()

    /*穿1*/
    ;(function () {
        var oBox=document.getElementById('box');
        var oImg=document.getElementById('dong');
        var o
        var x = 0; 			//x轴角度
        var y = 0; 			//y轴角度
        var iSpeedX = 0;
        var iSpeedY = 0;
        var lastX = 0;
        var lastY = 0;
        oBox.onmousedown = function(ev){
            var disX = ev.pageX-y;
            var disY = ev.pageY-x;
            oImg.style.display='none';
            document.onmousemove = function(ev){
                x = ev.pageY-disY;
                y = ev.pageX-disX;

                oBox.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';

                iSpeedX = ev.pageX-lastX;
                iSpeedY = ev.pageY-lastY;
                lastX = ev.pageX;
                lastY = ev.pageY;
            };
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
                clearInterval(oBox.timer);
                oBox.timer = setInterval(function(){
                    x+= iSpeedY;
                    y+= iSpeedX;
                    oBox.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
                    iSpeedX*=0.95;
                    iSpeedY*=0.95;
                    if(Math.abs(iSpeedX)<1)iSpeedX=0;
                    if(Math.abs(iSpeedY)<1)iSpeedY=0;
                    if(iSpeedX==0&&iSpeedY==0){
                        clearInterval(oBox.timer);
                    }
                },30);

            };
            return false;
        };
    })()
    /*穿2*/
    ;(function () {
        var oBox2 = document.querySelector('.box2');
        var aPic2 = oBox2.children;
        var w = 40;
        var aPos = [];

        for(var i = 0;i<aPic2.length;i++){
            aPos.push({left:aPic2[i].offsetLeft})
        }
        for(var i = 0;i<aPos.length;i++){
            aPic2[i].style.position='absolute';
            aPic2[i].style.left=aPos[i].left+'px';
        }

        for(var i =1;i<aPic2.length;i++){
            aPic2[i].style.left=parseInt(getComputedStyle(oBox2,false).width)-w*(aPic2.length-i)+'px';
        }

        for(var i=0;i<aPic2.length;i++){
            aPic2[i].index=i;
            aPic2[i].onmouseover=function(){
                for(var i=0;i<aPic2.length;i++){
                    if(i<=this.index){
                        move(aPic2[i],{left:i*w})
                    }else{
                        move(aPic2[i],{left:oBox2.offsetWidth-w*(aPic2.length-i)});
                    }
                }
            };
        }
    })()
    /*穿3*/
    ;(function () {
        var oBox3 = document.querySelector('.box3');
        var R = oBox3.offsetWidth/2;
        var d = 0;

        var N = 10;

        var aImg3 = oBox3.children;
        var bOk = true;
        oBox3.onclick = function(){
            if(bOk){
                for(var i=0;i<aImg3.length;i++){
                    moves(aImg3[i],360/N*i);

                }
            }else{
                for(var i=0;i<aImg3.length;i++){
                    moves(aImg3[i],0);
                }
            }
            bOk = !bOk;
        };
        function moves(obj,iTarget){
            var start = obj.a||0;
            var dis = iTarget-start;
            var count = Math.floor(1000/30);
            var n = 0;
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                n++;
                var a = 1-n/count;
                var cur = start+dis*(1-Math.pow(a,3));
                obj.a = cur;
                var x = R+Math.sin(d2a(cur))*R;
                var y = R-Math.cos(d2a(cur))*R;

                obj.style.left = x+'px';
                obj.style.top = y+'px';

                if(n==count){
                    clearInterval(obj.timer);
                }
            },30);
        }
    })()
    /*穿4*/
    ;(function () {
        var oYear = document.getElementById('year');
        var oTime = document.getElementById('time');
        var aYimg = document.querySelectorAll('#year img');
        var aTimg = document.querySelectorAll('#time img');
        var timer=null;
        function toDou(n){
            return n>10?''+n:'0'+n;
        }
        var arr=['seven','one','two','three','four','five','six'];
        var oDate = new Date();
        var y = oDate.getFullYear();
        var M = oDate.getMonth()+1;
        var d = oDate.getDate();

        var str=''+toDou(y)+'-'+toDou(M)+'-'+toDou(d)+'';
        for(var i=0;i<aYimg.length;i++){
            if(aYimg[i].className=='num'){
                aYimg[i].src='images/'+str.charAt(i)+'.png';
            }
        }
        function show(){
            var oDate = new Date();
            var week = oDate.getDay();
            var h = oDate.getHours();
            var m = oDate.getMinutes();
            var s = oDate.getSeconds();
            var str2=''+toDou(h)+'-'+toDou(m)+'-'+toDou(s)+'';
            for(var i=0;i<aTimg.length;i++){
                if(aTimg[i].className=='num'){
                    aTimg[i].src='images/'+str2.charAt(i)+'.png';
                }
            }
            aTimg[aTimg.length-1].src='images/'+arr[week]+'.png'
        }
        show();
        timer=setInterval(show,1000);

    })()

    ;(function () {
        var oC = document.getElementById('biao');
        var gd = oC.getContext('2d');
        var cx = oC.width/2,
            cy = oC.height/2;
        function clock(){
            gd.clearRect(0,0,oC.width,oC.height);
            var oDate = new Date();
            var H = oDate.getHours();
            var M = oDate.getMinutes();
            var S = oDate.getSeconds();
            var MS = oDate.getMilliseconds();

            drawArc(60,0,(H*30+M/60*30),'pink');
            drawArc(80,0,(M*6+S/60*6),'orange');
            drawArc(100,0,(S*6+MS/1000*6),'aqua');

            var str = toDou(H)+':'+toDou(M)+':'+toDou(S);
            gd.font = '20px 微软雅黑';
            gd.textAlign = 'center';
            gd.textBaseline = 'middle';
            gd.fillStyle='#fff';
            gd.linewidth='50px';
            gd.fillText(str,cx,cy);
        }
        clock()
        setInterval(clock,1);



        function drawArc(r,s,e,color){
            color = color||'black';
            gd.beginPath();
            gd.arc(cx,cy,r,d2a(s-90),d2a(e-90),false);
            gd.strokeStyle = color;
            gd.lineWidth = 20;
            gd.stroke();
        }
    })()
        /*穿5*/
    ;(function () {
        var aA = document.querySelectorAll('#box5 a img');
        var aPos = [];
        for(var i=0;i<aA.length;i++){
            aPos.push({left:aA[i].offsetLeft,top:aA[i].offsetTop});
        }
        for(var i=0;i<aPos.length;i++){
            aA[i].style.position='absolute';
            aA[i].style.left=aPos[i].left+'px';
            aA[i].style.top=aPos[i].top+'px';
            aA[i].style.margin=0;
        }
        for(var i=0;i<aA.length;i++){
            aA[i].index=i;
            aA[i].onmouseover=function(){
                move(this,{width:250,height:250,top:aPos[this.index].top-50,left:aPos[this.index].left-50});
                this.style.zIndex=10000;
            };
            aA[i].onmouseout=function(){
                move(this,{width:150,height:150,top:aPos[this.index].top,left:aPos[this.index].left});
                this.style.zIndex=100;
            };
        }
    })()
    /*chuan6*/
    ;(function () {
        var oUl = document.querySelector('#box6');
        var aLi = oUl.children;
        var N = 11;
        oUl.onclick= function () {
            for(var i=0;i<N;i++){
                aLi[i].style.WebkitTransition = '1s all ease '+(N-i)*100+'ms';

                aLi[i].style.WebkitTransform = 'rotateY('+360/N*i+'deg) translateZ(350px)';
            }

            //获取不到transform的值，用数字模拟
            var x = 0; 			//x轴角度
            var y = 0; 			//y轴角度
            var iSpeedX = 0;
            var iSpeedY = 0;
            var lastX = 0;
            var lastY = 0;
            oUl.onmousedown = function(ev){
                var disX = ev.pageX-y;
                var disY = ev.pageY-x;
                document.onmousemove = function(ev){
                    x = ev.pageY-disY;
                    y = ev.pageX-disX;

                    oUl.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';

                    iSpeedX = ev.pageX-lastX;
                    iSpeedY = ev.pageY-lastY;
                    lastX = ev.pageX;
                    lastY = ev.pageY;
                };
                document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                    clearInterval(oUl.timer);
                    oUl.timer = setInterval(function(){
                        x+= iSpeedY;
                        y+= iSpeedX;
                        oUl.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
                        iSpeedX*=0.95;
                        iSpeedY*=0.95;
                        if(Math.abs(iSpeedX)<1)iSpeedX=0;
                        if(Math.abs(iSpeedY)<1)iSpeedY=0;
                        if(iSpeedX==0&&iSpeedY==0){
                            clearInterval(oUl.timer);
                        }
                    },30);
                };
                return false;
            };
        }
    })()
    /*chuan7*/
    ;(function () {
        var oBox7 = document.querySelector('#box7');
        var C = 7;
        var R = 4;
        for(var i=0;i<C;i++){
            for(var j=0;j<R;j++){
                var oS = document.createElement('span');
                oS.style.width = oBox7.offsetWidth/C+'px';
                oS.style.height = oBox7.offsetHeight/R+'px';
                oBox7.appendChild(oS);
                oS.style.left = i*oS.offsetWidth+'px';
                oS.style.top = j*oS.offsetHeight+'px';
                oS.style.backgroundPosition = '-'+i*oS.offsetWidth+'px -'+j*oS.offsetHeight+'px';
            }
        }

        var aS = oBox7.children;
        var bOk = false;
        var iNow = 0;
        oBox7.onclick = function(){
            if(bOk)return;
            bOk = true;
            iNow++;
            for(var i=0;i<aS.length;i++){
                aS[i].style.WebkitTransition = '.8s all ease';

                var x = aS[i].offsetLeft+aS[i].offsetWidth/2-oBox7.offsetWidth/2;
                var y = aS[i].offsetTop+aS[i].offsetHeight/2-oBox7.offsetHeight/2;

                aS[i].style.WebkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg)';
                aS[i].style.opacity = 0;
            }

            function tranEnd(){
                aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
                for(var i=0;i<aS.length;i++){

                    aS[i].style.WebkitTransition = 'none';

                    aS[i].style.backgroundImage = 'url(img/'+(iNow%3+1)+'.jpg)';
                    oBox7.style.backgroundImage = 'url(img/'+((iNow+1)%3+1)+'.jpg)';


                    aS[i].style.WebkitTransform = ' perspective(800px) translate(0,0) rotateY(0) rotateX(0)';
                    aS[i].style.opacity = 1;
                }
                bOk = false;
            }
            aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
        };
    })()
        /*chuan8*/
    ;(function () {
        var oBox8=document.getElementById('box8');
        oBox8.onclick= function () {
            oBox8.style.webkitTransform='rotateY(180deg)';
        }
    })()
    /*chuan9*/
    ;(function () {
        var oBox9 = document.getElementById('box9');
        var C = 7;
        var R = 4;
        for(var i=0;i<C;i++){
            for(var j=0;j<R;j++){
                var oS9 = document.createElement('span');
                oS9.innerHTML = '<em class="front"></em><em class="back"></em>';
                oS9.style.width = oBox9.offsetWidth/C+'px';
                oS9.style.height = oBox9.offsetHeight/R+'px';
                oBox9.appendChild(oS9);
                oS9.style.left = i*oS9.offsetWidth+'px';
                oS9.style.top = j*oS9.offsetHeight+'px';
                var oFront = oS9.children[0];
                var oBack = oS9.children[1];
                oFront.style.backgroundPosition = '-'+i*oS9.offsetWidth+'px -'+j*oS9.offsetHeight+'px';
                oBack.style.backgroundPosition = '-'+i*oS9.offsetWidth+'px -'+j*oS9.offsetHeight+'px';
                oS9.c = i;
                oS9.r = j;
            }
        }

        var aS = oBox9.children;
        var bOk = false;
        var iNow = 0;
        oBox9.onclick = function(){
            if(bOk)return;
            bOk = true;
            iNow++;
            for(var i=0;i<aS.length;i++){
                ;(function(index){
                    setTimeout(function(){
                        aS[index].style.WebkitTransition = '1s all ease';
                        aS[index].style.WebkitTransform = 'perspective(800px) rotateY(180deg)';
                    },(aS[i].c+aS[i].r)*100);
                })(i);
            }
            function tranEnd(){
                aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
                for(var i=0;i<aS.length;i++){
                    aS[i].style.WebkitTransition = '';

                    var oFront = aS[i].children[0];
                    var oBack = aS[i].children[1];

                    oFront.style.backgroundImage = 'url(img/'+(iNow%3+1)+'.jpg)';
                    oBack.style.backgroundImage= 'url(img/'+((iNow+1)%3+1)+'.jpg)';

                    aS[i].style.WebkitTransform = 'perspective(800px) rotateY(0deg)';
                }
                bOk = false;
            }
            aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
        };
    })()

    /*game*/
    ;(function () {
        var oC = document.getElementById('c_game');
        var gd = oC.getContext('2d');
        loadImage(sources,function(aResult){
            //游戏代码
            //炮台
            var bottom = new Sprite(aResult.bottom);
            bottom.w = 765;
            bottom.h = 71;
            bottom.x = oC.width/2;
            bottom.y = oC.height-bottom.h/2;

            var cannon = new Cannon(aResult,1);
            cannon.x = bottom.x+cannon.w/2+5;
            cannon.y = bottom.y;

            //存鱼
            var aFish = [];
            setInterval(function(){
                var fish = new Fish(aResult,rnd(1,6));
                fish.x = -50;
                fish.y = rnd(0,oC.height);
                fish.r = rnd(45,135);
                aFish.push(fish);
            },500);

            //鼠标在canvas中移动改变cannon的r
            oC.onmousemove = function(ev){
                var a = ev.pageX-oC.offsetLeft-cannon.x;
                var b = cannon.y-(ev.pageY-oC.offsetTop);

                cannon.r = a2d(Math.atan2(a,b));
            };
            //存炮弹
            var aBullet = [];

            //点击canvas开炮
            oC.onclick = function(){
                var oA = new Audio();
                oA.src = 'mp3/gunShot.mp3';
                oA.play();

                var bullet = new Bullet(aResult.bullet,cannon.type);
                bullet.x = cannon.x;
                bullet.y = cannon.y;
                bullet.r = cannon.r;
                aBullet.push(bullet);
            };


            //存死鱼
            var aDieFish = [];

            setInterval(function(){
                gd.clearRect(0,0,oC.width,oC.height);
                bottom.draw(gd);


                //画鱼
                for(var i=0;i<aFish.length;i++){
                    aFish[i].move();
                    aFish[i].draw(gd);
                }//画炮弹
                for(var i=0;i<aBullet.length;i++){
                    aBullet[i].move();
                    aBullet[i].draw(gd);
                }


                //检测炮弹是否出去了。
                for(var i=0;i<aBullet.length;i++){
                    if(aBullet[i].x<-100||aBullet[i].x>oC.width+100||aBullet[i].y<-100||aBullet[i].y>oC.height+100){
                        aBullet.splice(i,1);
                        i--;
                    }
                }

                //检测鱼是否出去了。
                for(var i=0;i<aFish.length;i++){
                    if(aFish[i].x<-100||aFish[i].x>oC.width+100||aFish[i].y<-100||aFish[i].y>oC.height+100){
                        aFish.splice(i,1);
                        i--;
                    }
                }
                for(var i=0;i<aDieFish.length;i++){
                    aDieFish[i].draw(gd);
                }

                //鱼和炮弹的碰撞检测
                for(var i=0;i<aFish.length;i++){
                    for(var j=0;j<aBullet.length;j++){
                        if(aBullet[j].collTest(aFish[i])){
                            aBullet.splice(j,1);
                            var dieFish = new DieFish(aResult,aFish[i].type);
                            dieFish.x = aFish[i].x;
                            dieFish.y = aFish[i].y;
                            dieFish.r = aFish[i].r;
                            aDieFish.push(dieFish);
                            aFish.splice(i,1);
                            j--;
                            i--;
                        }
                    }
                }
                cannon.draw(gd);
            },30);

            //鱼游动\鱼去死
            setInterval(function(){
                for(var i=0;i<aFish.length;i++){
                    aFish[i].swim();
                }
                for(var i=0;i<aDieFish.length;i++){
                    aDieFish[i].goDie();
                    if(aDieFish[i].status==1){
                        aDieFish.splice(i,1);
                        i--;
                    }
                }
            },150);

        });
    })()
























    /*返回顶部*/
    ;(function () {
        var oTop = document.getElementById('toTop');
        var timer=null;
        var lock = false;
        window.onscroll=function(){
            var srcoll = document.documentElement.scrollTop || document.body.scrollTop;
            if(lock){
                clearInterval(timer);
            }
            lock=true;
            if(srcoll<=0){
                oTop.style.display='none';
            }else{
                oTop.style.display='block';
            }
        };
        oTop.onclick=function(){
            clearInterval(timer);
            var Srcoll = document.documentElement.scrollTop || document.body.scrollTop;
            var start = Srcoll;
            var dis = 0-start;
            var count=Math.floor(2000/30);
            var n=0;
            timer=setInterval(function(){
                n++;
                //让谁动
                lock=false;
                document.documentElement.scrollTop=document.body.scrollTop=start+dis*n/count;
                if(n==count){
                    clearInterval(timer);
                }
            },30)
        };
    })()



















;(function () {

    })()

}