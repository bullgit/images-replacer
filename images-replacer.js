
/* ============================
Images Replacer 1.0 | @Bullgit
http://http://bullgit.github.io/
author : @LukyVj
http://lucasbonomi.com 
==============================*/ 

document.write('<');
document.write('script id="jq"');
document.write('src="');
document.write('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
document.write('" type="text/javascript"></');
document.write('script');
document.write('>');
document.write('<script>$(document).ready(function(){var input=$("#imgControl input"),body=$(\'body\');body.append(\'<div id="imgControl"><input type="url" placeholder="change all images (url)"></div>\').append(\'<style>#imgControl{height:44px;width:30%;position:fixed;background:#2c3e50;z-index:10;top:0;margin-top:-34px}#imgControl:hover{margin:0}#imgControl input{width:90%;display:block;margin:8px auto;background:#000;border:0;appearance:none;outline:0;font-size:1.2em;color:#fff}</style>\');body.keyup(function(e){console.log("ku");e.preventDefault;var url=$(\'#imgControl input\').val();$(\'body\').find(\'img\').attr(\'src\',url);console.log("url="+url);});});</script>');
