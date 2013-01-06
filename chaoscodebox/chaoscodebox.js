var userAgent = navigator.userAgent.toLowerCase();
var is_webtv = userAgent.indexOf('webtv') != -1;
var is_kon = userAgent.indexOf('konqueror') != -1;
var is_mac = userAgent.indexOf('mac') != -1;
var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !is_saf;
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

var SWF_PATH = "/assets/chaoscodebox/ChaosClipboard.swf";

function prettify(){
	var swf_path = arguments[0] || SWF_PATH;
	$('code').each(function(index){
		var lang = $(this).attr('class');
		if(lang==null) return;
		var preNode = $(this.parentNode);
		
		preNode.addClass('prettyprint linenums');
		preNode.wrap('<div class="codebox"></div>');
		
		var button = insertCopyButton("id=code" + index, swf_path) ;
		var s = '<span class="code-lang">CODE:'+lang.toUpperCase()+'</span>';
			s += '<span style="float:right">';
			s += button;
			s += '</span>';
			s += '<pre id=code'+index+' style="display:none;">' + $(this).html() + '</pre>';
		
		var codebox = $(this.parentNode.parentNode);
		codebox.prepend(s);
	});

	prettyPrint();
}

function insertCopyButton(flashvars){
	var swfPath=arguments[1]?arguments[1]:SWF_PATH;
	var width=arguments[2]?arguments[2]:85;
	var height=arguments[3]?arguments[3]:20;  
	var htmlCode = "";
	if(is_ie){
		htmlCode += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+width+'" height="'+height+'">';
		htmlCode += '	<param name="movie" value="'+swfPath+'">';
	}
	else{
		htmlCode += '<object type="application/x-shockwave-flash" data="'+swfPath+'" width="'+width+'" height="'+height+'">';
	}
	htmlCode += '	<param name="allowscriptaccess" value="*" />';
	htmlCode += '	<param name="flashvars" value="'+flashvars+'" />';
	htmlCode += '</object>';
	
	return htmlCode;
}

function setContent(id){
	return $('#'+id).text();
}
