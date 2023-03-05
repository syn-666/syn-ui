# .editorconfig 文件

```
由于不同开发人员可能使用不同的编辑器，而不同编辑器有不同的编程风格，如有的编辑器使用空格缩进、有的使用Tab键缩进；有的编辑器Tab键表示2个空格缩进，有的编辑器Tab键表示4个空格缩进。因此，同一份代码在不同编辑器可能会呈现不同表现形式，如本地整齐的代码，在远端或同事编辑器上会变得异常难看，进而影响代码可读性和开发人员的情绪。为了解决编辑器配置层面的编码风格不一致问题，我们就需要使用到Editorconfig文件。
```

```
indent_style:  设置缩进为 tab 或 space

tab_width:  设置 tab 所占列数。默认是 indent_size

indent_size:  设置缩进所占列数，如果 indent_style 为 tab，则以 tab_width 值作为缩进宽度

end_of_line:  设置换行符，值为 lf(换行)、cr(回车) 和 crlf(回车换行)

charset:  设置编码，值为 latin1、utf-8、utf-8-bom、utf-16be 和 utf-16le，不建议使用 utf-8-bom

trim_trailing_whitespace:  设为 true 表示会去除行尾的空白字符

insert_final_newline:  设为 true 表示使文件以一个空白行结尾

root:  表示是最顶层的配置文件，设为 true 时，停止向上查找

```

### editorconfig 通配符:

```
* :  匹配除路径分隔符“/”以外的任意字符

**: 匹配任意字符

?: 匹配任意单个字符

[name]: 指定匹配字符

[!name]: 指定非匹配字符

{s1,s2,s3} :  匹配多个指定字符，以分号“,”分隔

{num1..num2} :  匹配num1和num2之间的任意整数，num1和num2可以是正数，也可以是负数；特殊字符可以用反斜杠""转义，避免被解释为通配符模式
```

> > > EditorConfig 解决的只是编辑器配置层面的编码风格一致性问题。对于代码风格的部分并未涉及，比如是否「需要在语句末尾添加分号」，「字符串使用单引号还是双引号包裹」，「多行对象的书写规范」等等。这一类代码风格问题，则是由 Prettier 来规范。。

# eslint 代码检查工具

> > > 在代码编写的过程中，Eslint 通过规则模式匹配实现识别和报告的不符合规范的代码的功能，并对不符合规范的代码进行红线提示。它的目的是保证代码规范的一致性和及时发现代码问题、提前避免错误发生。同时，Eslint 提供命令行检查规范及 auto-fix 能力，并具有一部分代码格式化的功能

- 安装

1. npm i eslint -g
2. eslint --init 自动生成 eslintrc.js 文件

```
extends: 指定扩展的配置，配置支持递归扩展，支持规则的覆盖和聚合。extends 数组的顺序非常重要。基本上，每次一个新配置添加到这个数组中，它都会覆盖前面的配置。

ignorePatterns:  忽略特定的文件和目录

rules: 启用的规则及其各自的错误级别，可以覆盖掉extends的配置。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一："off" （0）- 关闭规则；"warn"（1）- 开启规则，使用警告级别的错误： "error" （2）- 开启规则，使用错误级别的错误，此时程序会退出

plugins: 配置想要使用的Linting规则的第三方插件名字列表。插件名称可以省略 eslint-plugin- 前缀。

env: 指定脚本的运行环境，每种环境都有一组特定的预定义全局变量。如 brower、node、es6 等。

parser: 默认Eslint使用Espree作为解析器，如果使用babel的话，我们需要用babel-eslint。

parserOptions: 当默认解析器从Espree改为babel-eslint时，必须指定parseOptions

globals: 配置额外的全局变量。启用 Eslint规则后，当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。 而有时候，我们是需要在其他文件访问一些全局变量的，且保证能正常取到值。这时可以在 Eslint中定义这些全局变量，这样 Eslint就不会发出警告了。

settings：该字段
```

- 配置文件的优先级

- .eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > package.json

# Prettier

> > > Prettier 通过解析代码并匹配自己的一套规则，来强制执行一致的代码展示格式，在美化代码方面有很大的优势。Prettier 通过语法分析将代码解析为 AST 树(抽象语法树（Abstract Syntax Tree，AST），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构，在 AST 树上应用代码风格规范重新生成代码。

```
Prettier 使用 cosmiconfig 支持配置文件，cosmiconfig 是一种常用的配置文件读取工具，按照下述顺序沿文件树寻找配置文件，找到则停止：

 package.json 中的 prettier 字段

 .prettierrc 文件

 .prettierrc.json 文件

 .prettierrc.js 文件

 .prettierrc.toml 文件

选择上述任一方式进行自定义配置 Prettier，如不存在配置文件，Prettier 将依照默认值处理。

Prettier 处理的范围包含如：

 字符串引号风格

 空行处理

 多行对象格式

 分号处理

 打印宽度：

 控制换行

 通过换行控制评论影响范围

示例配置：

printWidth: 80,  // 打印宽度，默认是 80 列

tabWidth: 2,  // 缩进所占列数，默认是 2 列

useTabs: false,  // 缩进风格是否是Tab，默认是 false ，使用空格缩进

semi: true,  // 在语句末尾添加分号，默认是 true

singleQuote: false,  // 使用单引号，默认是 false

quoteProps: "as-needed",  // 对象中的属性使用引号， "as-needed" (默认)只对需要的属性加引号； "consistent" 同一对象中属性引号保持统一；"preserve" 强制使用引号。

jsxSingleQuotes: false,  // JSX中使用单引号，默认是 false

trailingComma: "es5",  // 多行时是否结尾添加逗号； "es5" (默认)ES5中允许逗号的容器中添加逗号； "all" 尽可能添加逗号；"none" 不允许添加逗

bracketSpacing: true,  // 是否保留对象内侧两端的空格，比如 { foo: bar } 和 {foo:bar} 的区别

jsxBracketSameLine: false,  // 多行 JSX 的元素是否能和属性同行，在多行JSX元素的最后一行追加 >， 默认是 false

arrowParens: "always",  // 箭头函数参数使用圆括号包裹 比如 (x) => x 和 x => x 的区别，"always"( 默认) 总是包裹； "avoid" 尽可能避免包裹

rangeStart: 0,  // 只格式化文件中的一部分，范围开始于第几行

rangeEnd: Infinity,  // 只格式化文件中的一部分，范围结束于第几行

parser: "none"， // 指定解析器，根据文件路径推断解析器，比如 .js 文件使用 babel 解析；.scss 文件使用 post-scss 解析

filepath: "none"，  // 指定用于推断使用那个解析器的文件名

requirePragma: false，  // 限制只格式化在文件顶部做了需格式化标识的文件，适用于在大型未格式化项目中，先指定少量文件格式化

insertPragma: false， //在文件的第一个docblock注释中插入@format pragma

proseWrap: "preserve"， //默认为’ preserve’, 还有’nerver’和’always’

htmlWhitespaceSensitivity: "css"，  // HTML 文件的空格敏感度，"css"（默认） 和 css 的 display 属性保持一致；"strict" 空格敏感； "ignore" 空格不敏感

vueIndentScriptAndStyle: false，  // 是否对 Vue 文件中 <script> 和 <style> 标签内的代码应用缩进

endOfLine: "lf"，  // 换行符

embeddedLanguageFormatting: "auto"，  // 是否格式化嵌入引用代码，比如 markdown 文件中嵌入的代码块； "auto" Prettier 自动识别并格式化； "off" 关闭自动格式化

    Prettier 专注于统一代码样式，并不具有 lint 检查语法等能力。而 Eslint 专注于找到代码存在的问题避免错误。
```

# EditorConfig、Prettier 以及 Eslint 之间的协作

> > > Prettier 和 EditorConfig 共享一些配置项，我们不希望在两个单独的文件中重复这些配置项，并让二者保持同步（比如：尾行配置）。Prettier 的最新版本通过解析 .editorconfig 文件来确定要使用的配置选项解决了此问题。

```
这些选项仅限于：

end_of_line

indent_style

indent_size/tab_width

max_line_length

这些配置选项将覆盖以下 Prettier 选项（如果未在 .prettierrc 中定义它们）：

"endOfLine"

"useTabs"

"tabWidth"

"printWidth"
```
