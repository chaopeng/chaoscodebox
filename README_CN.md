什么是ChaosCodebox?
---
ChaosCodebox是一个网页的代码高亮库。它是使用google-code-prettify作为高亮引擎的。ChaosCodebox是一个[ChaosBlog](https://github.com/chaopeng/chaosblog)的一个子项目。

与google-code-prettify的区别
---
ChaosCodebox拥有一个复制到剪贴板的按钮，同时还会当前的显示语言类型。

怎样使用ChaosCodebox?
---
你需要在网页的`<head>`标签中插入如下的代码:

```{html}
<link rel="stylesheet" type="text/css" href="prettify/prettify.css" />
<link rel="stylesheet" type="text/css" href="chaoscodebox/chaoscodebox.css" />
<script type="text/javascript" src="prettify/prettify.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="chaoscodebox/chaoscodebox.js"></script>

<script type="text/javascript">
$(document).ready(function(){
  prettify();
});
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



