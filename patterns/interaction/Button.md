---
imports:
    Button: ./Button.jsx

scope:
    label: Hit me
    count: 0

messages:
    SET: scope.Set
    RESET: scope.Reset,
---

Button
====

```render jsx aside
<Button onClick={() => dispatch( RESET() )}>
    Reset
</Button>
```

The button component creates buttons.

```demo jsx aside
<Button onClick={() => dispatch( SET({count: count + 1}) )}>
    {label}
</Button>
<p>{count}</p>
```

Buttons usually have an action set via the `onClick` property.
