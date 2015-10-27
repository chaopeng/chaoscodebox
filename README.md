What is ChaosCodebox?
---
ChaosCodebox is a syntax highlighting of code snippets in a web page. It uses google-code-prettify as engine. It is a subproject of [ChaosBlog](https://github.com/chaopeng/chaosblog). 

ChaosCodebox has a clipboard button so that you can copy code by one click.

How to use ChaosCodebox?
---
You should include prettify, jquery and chaoscodebox. Call prettify() onloaded. 

Here is a sample:

```{html}
<link rel="stylesheet" type="text/css" href="http://cdn.staticfile.org/prettify/r298/prettify.css" />
<link rel="stylesheet" type="text/css" href="chaoscodebox/sons-of-obsidian.css" />
<link rel="stylesheet" type="text/css" href="chaoscodebox/chaoscodebox.css" />
<script type="text/javascript" src="http://cdn.staticfile.org/prettify/r298/prettify.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.0/clipboard.min.js"></script>
<script type="text/javascript" src="http://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="chaoscodebox/chaoscodebox.js"></script>
<script type="text/javascript">

$(document).ready(function(){
    prettify();
    var clipboard = new Clipboard('.copy');
    
    clipboard.on('success', function(e) {

        e.clearSelection();
    });
})
</script>
```

You can add other css of google-code-prettify to support more language or uses the other color theme. 

How can I uses it in workpress?
---

1. add the sample code to `wp-content/themes/[current_theme]/header.php`.
2. using`<pre><code class="language">code...</code></pre>` to insert code into your article.

Contact me if you have any questions at chaoscodebox
---
weibo: [http://weibo.com/chaojianpeng](http://weibo.com/chaojianpeng)

Release Note
---

- v2.0
    - change clipboard from Flash to [clipboardjs](http://clipboardjs.com/)
    - remove google-prettify in repository

Thanks
---

- [google-code-prettify](https://github.com/google/code-prettify)
- [clipboardjs](http://clipboardjs.com/)
