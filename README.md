# GitHub-Widget-jQuery-Amazeui
用Jquery和Amazeui做的GitHub插件，在一个页面上显示GitHub项目介绍。
## 首先引用Jquery和Amazeui
```html
  <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.2.1/css/amazeui.min.css"/>  
  <script src="http://libs.baidu.com/jquery/2.1.1/jquery.js"></script>
```
## 再引入github.js
```html
<script src="github.js" type="text/javascript"></script>
```
## 在主页里按如下格式嵌入，以wkhtmltopdf为例
```html
<div class="github-widget github_wkhtmltopdf" data-repo="wkhtmltopdf/wkhtmltopdf" data-issu="wkhtmltopdf" ></div>
```