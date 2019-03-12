React Hello Context Demo
======================

如何利用React新增加的Context功能，全局共享数据。

注意：

```
<ThemeContext.Consumer>{context =>
  (<h1 style={{color: context.color}}>Hello Freewind</h1>)
}</ThemeContext.Consumer>
```

代码中`<ThemeContext.Consumer>`标签与花括号之间不能有任何空白！否则会提示错误：

```
Warning: A context consumer was rendered with multiple children, or a child that isn't a function. 
A context consumer expects a single child that is a function. 
If you did pass a function, make sure there is no trailing or leading whitespace around it.
```

运行：

```
npm install
npm run demo
```

