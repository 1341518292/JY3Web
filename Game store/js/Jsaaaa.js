$("#t1").append("<img class='timg1' src='img/logo.svg'/>");
$("#td1").append("<div>首页</div><div>商城</div><div>充值</div><div>客服</div><div>登录</div>");
$("#td2").append("<input type='text' placeholder='搜索' />");
$(".ab1").append("<p class='p1'>孤岛惊魂 新曙光</p><p class='p2'>现已正式发售</p><p class='p3'>在孤岛惊魂5的续集中，直面残暴的拦路匪徒和他们的双胞胎领袖。</p>");
$(".ab2").append("<div class='b1'>立即购买</div><div class='kong2'></div><div class='b2'>了解更多</div>");
$(".log1:eq(0)").append("<img src='Logo/odyssey_logo.png' />");
$(".log1:eq(1)").append("<img src='Logo/r6_logo_new.png' />");
$(".log1:eq(2)").append("<img src='Logo/farcry_logo.png' />");
$(".log1:eq(3)").append("<img src='Logo/store_logo.png' />");
$(".log1:eq(4)").append("<img src='Logo/tctd2_logo.png' />");
$(".ab4").append("<img class='Img2' src='img/游戏.svg' /><span>游戏分类</span>");
$(".u1").append("<span><a href='' class='a1'>动作类</a></span>");
$(".u1").append("<span><a href='' class='a1'>冒险类</a></span>");
$(".u1").append("<span><a href='' class='a1'>剧情类</a></span>");
$(".u1").append("<span><a href='' class='a1'>恐怖类</a></span>");
$(".u1").append("<span><a href='' class='a1'>经营类</a></span>");
$(".u1").append("<span><a href='' class='a1'>模拟类</a></span>");
$(".u1").append("<span><a href='' class='a1'>解谜类</a></span>");
$(".u1").append("<span><a href='' class='a1'>魔幻类</a></span>");
$("#cen3").append("<div class='ab6' ><img src='img/热卖.svg' />热卖游戏</div>");
$(".ab7").append("<img src='img/gta5.jpg' />");
$(".To").append("<a href='#top'><img src='img/top.svg' /></a>");
$("#cen5").append("<div class='ab8'>亲！再看看一吧</div><div class='ab9'>百年老店，童叟无欺。</div>");

$("#title1").append("<div class='div1'>账号登录</div><div class='s1'>丨</div><div class='div1'>扫码登录</div>");
$(".body1:first").append("<img src='img/用户 (2).svg' /> <input type='text' />");
$(".body1:last").append("<img src='img/密码.svg' /><input type='password' />");
$(".body2").append("<button class='but1'>登录</button>");
$("#body3").append("<div id='div2'>注　册</div><div>忘记密码？</div>");
$(".aa1:first").append("<img src='img/用户 (2).svg' /><input placeholder='请输入手机号' type='text' />");
$(".aa1:eq(1)").append("<img src='img/验证码.svg' /><input placeholder='验证码' id='inp1' type='text' /><button id='but2'>获取验证码</button>");
$(".aa1:eq(2)").append("<img src='img/密码 (1).svg' /><input placeholder='请输入密码' type='password' />");
$(".aa1:last").append("<button class='but1'>注册</button>");
$(".aa1:eq(3)").append("<input id='inp2' type='radio' /><p>我已阅读并同意《睿乐Go用户协议》</p>");
$("#font1").append("<span>已有账号？</span><span id='span1'>点击登录</span>");







$("#td1 div:last").click(function(){
	$(".cneter").css("display","none");
	$(".cneter1").css("display","block");
	$(".center2").css("display","none");
	$(".center3").css("display","none");
	$(".center4").css("display","none");
	$(".center5").css("display","none");
});
$("#td1 div:first").click(function(){
	$(".cneter").css("display","block");
	$(".cneter1").css("display","none");
	$(".center2").css("display","none");
	$(".center3").css("display","none");
	$(".center4").css("display","none");
	$(".center5").css("display","none");
});
$("#div2").click(function(){
	$(".cneter1").css("display","none");
	$(".center2").css("display","block");
	$(".center3").css("display","none");
	$(".center5").css("display","none");
})
$("#span1").click(function(){
	$(".cneter1").css("display","block");
	$(".center2").css("display","none");
	$(".center3").css("display","none");
	$(".center4").css("display","none");
	$(".center5").css("display","none");
})
$("#td1 div:eq(1)").click(function(){
	$(".cneter").css("display","none");
	$(".cneter1").css("display","none");
	$(".center2").css("display","none");
	$(".center3").css("display","block");
	$(".center4").css("display","none");
	$(".center5").css("display","none");
		
})
$(".div2:first").click(function(){
	$(".center3").css("display","none");
	$(".center4").css("display","block");
})
$(".div2:eq(1)").click(function(){
	$(".center3").css("display","none");
	$(".center5").css("display","block");
})
setTimeout("$('.lodin').css('display','none')",1400);
setTimeout("$('#first').css('display','flex')",1500);
//$('#first').css('display','block');
   // setTimeout("A()",1000);
