# Template of a postprocessor based on CSScomb Core

This is an example repo to get you up and running with CSScomb Core.    
Just fork it and modify for your needs.

This example tool is called Flip Comb.    
All it does is replace comments in CSS files with `/* (╯°□°）╯︵ ┻━┻ */`.

Usage:

```js
var FlipComb = require('flip-comb');
var flipper = new FlipComb({ 'flip-comments': true });

flipper.processDirectory('path/to/css');
```

Example CSS before:

```css
/* Some important comment */
a {}
/**
 * Another one
 */
p {
    color: panda; /* Pandas! */
}
```

And after:

```css
/*  (╯°□°）╯︵ ┻━┻ */
a {}
/* (╯°□°）╯︵ ┻━┻ */
p {
    color: panda; /* (╯°□°）╯︵ ┻━┻ */
}
```
