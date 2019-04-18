
<!--
var fstbiz_n_scroll=0;
var fstbiz_bln=true;
function fstbiz_fuc_maxX() {
  if(document.documentElement.clientWidth)
    return document.documentElement.clientWidth;
  if(document.body.clientWidth)
    return document.body.clientWidth;
}

function fstbiz_func01(){
	if(fstbiz_bln==false){
		return;
	}
	fstbiz_bln=false;
	var x = fstbiz_fuc_maxX();
	var obj = document.getElementById('fstbiz_displayImg').style;
	x = x/2 - (eval((obj.width.replace("px","")))/2);
	obj.visibility = "visible";
	if ( document.compatMode == 'CSS1Compat'){
		obj.top = (document.documentElement.scrollTop + 50) + "px";
	}else{
		obj.top = (document.body.scrollTop + 50) + "px";
	}
	obj.left = x + "px";
	fstbiz_play();
}

function fstbiz_func02(){
	var obj = document.getElementById('fstbiz_displayImg').style;
	obj.visibility = "hidden";
}

function fstbiz_init(){
	var div = document.createElement("div");
	div.id = "fstbiz_beep"
	document.body.appendChild(div);
}

function fstbiz_play(e){
	var div = document.getElementById("fstbiz_beep");
	var innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="0" height="0" id="fstbiz_beep"><param name="movie" value="http://linux-topics.com/listcollector/fstbiz_beep.swf" /><embed src="http://linux-topics.com/listcollector/fstbiz_beep.swf" width="0" height="0" name="fstbiz_beep" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'
	div.innerHTML = innerHTML;
}
window.onload=fstbiz_init;
function fstbiz_addEvent(element, eventType, fn, useCapture) {

	ie=false
	nn=false
	if(document.all){ie=true}
	if(navigator.appName=="Netscape"||navigator.userAgent.indexOf("Opera")!=-1){nn=true}

	if(ie){
		if (element.addEventListener) {
			element.addEventListener(eventType, fn, useCapture);
			return true;
		}
		else if (element.attachEvent) {
			var r = element.attachEvent('on' + eventType, fn);
			return r;    
		}
		else {
			element['on'+eventType] = fn;
		}
	}
	if(nn){
		scrollnn()
	}
}

function scrollnn(){
	var scr=window.pageYOffset
	if(scr!=fstbiz_n_scroll){
		fstbiz_onScroll();
		fstbiz_n_scroll=scr;
	}
	setTimeout("scrollnn()",500)
}


function fstbiz_onScroll(evt) {
	var obj = document.getElementById('overimg').style;
	if ( document.compatMode == 'CSS1Compat'){
		obj.top = document.documentElement.scrollTop + "px";
	}else{
		obj.top = document.body.scrollTop + "px";
	}

	
}
fstbiz_addEvent( window, 'scroll', fstbiz_onScroll, false );


document.write("<div id='overimg' style='position:absolute;top:0px;left:0px;width:100%;height:30px;z-index:999' onMouseOver=\"fstbiz_func01();return true\"><img src=\"http://linux-topics.com/listcollector/blank.gif\" width=\"100%\" height=\"30\"></div>");

document.write("<div id='fstbiz_displayImg' style='border: 1px solid #000000;background-color:#FFFFFF;position:absolute;visibility:hidden;top:0px;left:0px;width:560px;z-index:999'> ");

document.write("<table width=\"560px\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n");
document.write("<tr>\n");
document.write("<td align=\"left\" style=\"font-size:10pt;background-color:#6f9142;\">\n");
document.write("<b style=\"color:#FFFFFF;text-decoration:none;padding:5px\">CentOS7.4サーバー構築マニュアルを期間限定無料プレゼント中</b>\n");
document.write("</td>\n");
document.write("</tr>\n");
document.write("<tr>\n");
document.write("<td style=\"padding:5px;line-height:20px;\">\n");
document.write("<center><font style=\"font-size:19pt;line-height:30px;\" color=\"#FF0000\"><U>CentOS7.4サーバー構築マニュアルを</U></font></center>\n");
document.write("<center><font style=\"font-size:19pt\" color=\"#FF0000\"><U>期間限定無料プレゼント(合計173ページ)</U></font></center>\n");
document.write("<br>\n");
document.write("当ページにアクセスして頂きありがとうございます。<br>\n");
document.write("<br>\n");
document.write("現在、合計173ページにもなる<br>\n");
document.write("<U>３冊のLinuxサーバー構築マニュアルを無料プレゼントしています。</U><br>\n");
document.write("今すぐ下記お申込みフォームから、無料マニュアルをダウンロードしてください。<br><br>\n");
document.write("<b><u>あなたがマニュアルを入手するのに、お金は１円もかかりません。</u></b><br>\n");
document.write("<br>\n");
document.write("<p><b>【今回プレゼントするLinux無料マニュアル】</b><br>\n");
document.write("<font color=\"#FF0000\"><strong>■CentOS7.4サーバー構築マニュアル（105ページ）</strong></font><br>\n");
document.write("<font color=\"#FF0000\"><strong>■VMware Playerで作る仮想Linux環境構築マニュアル（40ページ）</strong></font><br>\n");
document.write("<font color=\"#FF0000\"><strong>■データベース(PostgreSQL・MySQL)構築マニュアル（28ページ）</p></strong></font>\n");
document.write("<br>\n");
document.write("<center><table border=\"1\" width=\"400\"><tr><td align=\"left\" bgcolor=\"#6f9142\"><br>\n");
document.write("<form action=\"http://mailmag.enetmercury.com/distribute/cgi-bin/apply.cgi\" name=\"form1\" method=\"post\" >\n");
document.write("<b>姓:</b><input type='text' value='山田' name='sei' size='10' tabindex='2' accesskey='2' />\n");
document.write("<b>名:</b><input type='text' value='太郎' name='mei' size='10' tabindex='3' accesskey='3' /><b>（ニックネーム可）</b><br><br>\n");
document.write("<b>メールアドレス:</b><input type='text' value='メールアドレスを入力' name='mail' size='40' tabindex='4' accesskey='4' /><br>\n");
document.write("<br>\n");
document.write("<center><input type='submit' value='　マニュアルを今すぐダウンロード　'></center>\n");
document.write("<br>\n");
document.write("<input name=\"md\" type=\"hidden\" id=\"md\" value=\"guest\">\n");
document.write("<input name=\"id\" type=\"hidden\" id=\"id\" value=\"152448151730067\">\n");
document.write("<input name=\"cd\" type=\"hidden\" id=\"cd\" value=\"文字\">\n");
document.write("</form>\n");
document.write("</TD></TR></TBODY></TABLE>\n");
document.write("<br>\n");
document.write("<p>このマニュアルさえあれば、どんな人でも今すぐにLinuxを始められます</p>\n");
document.write("<a href=\"http://www.linuxmaster.jp/2011/01/linux.html\" target=\"_blank\">＞＞詳細はこちらで確認できます。＜＜</a>\n");

document.write("</td>\n");
document.write("</tr>\n");
document.write("<tr>\n");
document.write("<td align=\"right\" style=\"font-size:10pt;background-color:#FFFFFF\">\n");
document.write("<a href=\"javascript:fstbiz_func02();\"><b style=\"color:#000000;text-decoration:none;padding:5px\">閉じる</b></a>\n");
document.write("</td>\n");
document.write("</tr>\n");
document.write("</table>\n");


document.write("</div>");
//-->

