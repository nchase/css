Have you ever been in a situation where you really wanted to use `margin`,
but used `padding` because you couldn't get two margins to "butt-up" against each other?

(use case: "this element is separated from the other elements on the page by "space", so I should use margin.") 

***

The "collapsing margins" behavior is in the spec. It even has its own section. [CSS 2.1 Section 8.3.1](https://www.w3.org/TR/CSS2/box.html#collapsing-margins), "Collapsing Margins":

> In CSS, the adjoining margins of two or more boxes (which might or might not be siblings)
> can combine to form a single margin. Margins that combine this way are said to collapse, 
> and the resulting combined margin is called a collapsed margin. 
> [...] Horizontal margins never collapse.

`display: inline-block` elements do not collapse margins.

***

Here's a codepen with two simple blocks with `1em` vertical margin: http://codepen.io/nchase/pen/dPdepa.

If you add `display: inline-block` to the ruleset, you'll see that the margins will cease to collapse.

Similarly, if you're able to add vertical `padding` to an element against the affected margin, you will also see the margin cease to collapse.
