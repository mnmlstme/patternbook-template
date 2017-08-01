---
imports:
    Button: ./Button.jsx

scope:
    label: Hit me
    count: 0

messages:
    Set: scope.Set
    Reset: scope.Reset
---

Button
----

The button component creates buttons.

```render html
<Button onClick={() => dispatch(Reset())}>
    Reset
</Button>
```

Buttons look like this:

```show html
<Button onClick={() => dispatch(Set({count: count + 1}))}>
    {label}
</Button>
<p>{count}</p>
```
