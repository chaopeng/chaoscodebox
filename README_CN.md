什么是ChaosCodebox?
---
ChaosCodebox是一个网页的代码高亮库。它是使用google-code-prettify作为高亮引擎的。ChaosCodebox是一个[ChaosBlog](https://github.com/chaopeng/chaosblog)的一个子项目。

[DEMO](https://rawgit.com/chaopeng/chaoscodebox/master/demo.html)

与google-code-prettify的区别
---
ChaosCodebox拥有一个复制到剪贴板的按钮，同时还会当前的显示语言类型。

怎样使用ChaosCodebox?
---
你需要在网页的`<head>`标签中插入如下的代码:

```{html}
<link rel="stylesheet" type="text/css" href="http://cdn.staticfile.org/prettify/r298/prettify.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/chaopeng/chaoscodebox/v2.0/chaoscodebox-min/sons-of-obsidian.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/chaopeng/chaoscodebox/v2.0/chaoscodebox-min/chaoscodebox.css" />
<script type="text/javascript" src="http://cdn.staticfile.org/prettify/r298/prettify.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.0/clipboard.min.js"></script>
<script type="text/javascript" src="http://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/chaopeng/chaoscodebox/v2.0/chaoscodebox-min/chaoscodebox.js"></script>
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

如果你有一些比较特殊的语言的话，你需要去google-code-prettify，增加一些css来增加这样语言的支持。同时你也可以通过修改css来修改配色主题。

我如何在wordpress中使用ChaosCodebox
---

1. 将上述的代码添加到`wp-content/themes/[current_theme]/header.php`
2. 在你的文章中使用`<pre><code class="language">code...</code></pre>`来插入代码

如果你在使用ChaosCodebox有任何问题你可以联系我
---

weibo: [http://weibo.com/chaojianpeng](http://weibo.com/chaojianpeng)

更新日志
---

- v2.0
    - 剪贴板实现由Flash迁移到[clipboardjs](http://clipboardjs.com/)
    - 删除仓库中google-prettify的代码

感谢
---

- [google-code-prettify](https://github.com/google/code-prettify)
- [clipboardjs](http://clipboardjs.com/)
