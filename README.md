What is ChaosCodebox?
---
ChaosCodebox is a syntax highlighting of code snippets in a web page. It uses google-code-prettify as engine. It is a subproject of [ChaosBlog](https://github.com/chaopeng/chaosblog). 

ChaosCodebox has a clipboard button so that you can copy code by one click.

How to use ChaosCodebox?
---
You should include prettify, jquery and chaoscodebox. Call prettify() onloaded. 

Here is a sample:
<pre><code>
&ltlink rel="stylesheet" type="text/css" href="prettify/prettify.css" /&gt
&ltlink rel="stylesheet" type="text/css" href="chaoscodebox/chaoscodebox.css" /&gt
&ltscript type="text/javascript" src="prettify/prettify.js"&gt&lt/script&gt
&ltscript type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js"&gt&lt/script&gt
&ltscript type="text/javascript" src="chaoscodebox/chaoscodebox.js"&gt&lt/script&gt
&ltscript type="text/javascript"&gt

$(document).ready(function(){
	prettify();
});
</code></pre>

