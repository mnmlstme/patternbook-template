---
theme: ../Theme.jsx
imports:
    Icon: ./Icon.jsx
symbols:
    circle: ./svg/circle.svg
    opencircle: ./svg/opencircle.svg
    content: ./svg/content.svg
    fontsize: ./svg/fontsize.svg
    pagesize: ./svg/pagesize.svg
    scale: ./svg/scale.svg
    fullscreen: ./svg/fullscreen.svg
---

Icons
----

Icons are produced as SVG and injected as `<symbol>`s
into the page.
They are referenced via the `<Icon>` component,
which generates an SVG `<use>` element.

```show html
<Icon symbol="circle"/>
```

```show html
<Icon symbol="opencircle"/>
```

```show html
<Icon symbol="content"/>
```

```show html
<Icon symbol="fontsize"/>
```

```show html
<Icon symbol="pagesize"/>
```

```show html
<Icon symbol="scale"/>
```

```show html
<Icon symbol="fullscreen"/>
```
