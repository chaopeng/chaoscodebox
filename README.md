What is ChaosCodebox?
---
ChaosCodebox is a syntax highlighting of code snippets in a web page. It uses google-code-prettify as engine. It is a subproject of ChaosBlog. 

ChaosCodebox has a clipboard button so that you can copy code by one click.

How to use ChaosCodebox?
---
You should include prettify, jquery and chaoscodebox. Call prettify() onloaded. 

Here is a sample:
<pre><code>
<link rel="stylesheet" type="text/css" href="prettify/prettify.css" />
<link rel="stylesheet" type="text/css" href="chaoscodebox/chaoscodebox.css" />
<script type="text/javascript" src="prettify/prettify.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="chaoscodebox/chaoscodebox.js"></script>
<script type="text/javascript">

$(document).ready(function(){
	prettify();
});
</code></pre>

