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

    /*home*/
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
        var Block=true;
        oStop.onclick=function(){
            if(Block){
                for(var i=0; i<aAudio.length;i++){
                    aAudio[i].pause();
                    Block=false;
                }
            }else {
                oA.play();
                Block = true;
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
        oC.width = 1280;
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
        for(var i=0;i<aLi.length;i++){
            through(aLi[i]);
        }
    })()



    /*game*/
    ;(function () {
        var gameBox = document.getElementById('game_box');
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
                var b = cannon.y-(ev.pageY-gameBox.offsetTop-oC.offsetTop);

                cannon.r = a2d(Math.atan2(a,b))

            };
            //存炮弹
            var aBullet = [];

            //点击canvas开炮
            oC.onclick = function(){
                var oA = new Audio();
                oA.src = '../mp3/gunShot.mp3';
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