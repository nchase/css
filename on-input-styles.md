# The One About Styling 'Replaced' Elements (e.g. `<input />` elements)

Inputs are challenging to style.  That's almost all I have to say about that,
but let's dive into the specification a little bit.

Inputs belong to a special class of element called ["replaced"](http://www.w3.org/TR/CSS21/conform.html#replaced-element) elements.

"Replaced" elements live outside of the scope of CSS and usually handle
some special purpose (e.g. user input). They're handed off from the browser
to the host operating system to be presented. On top of this, some of the styles
that we _can_ control are given special rules by default,
rules that may not cooperate with our base styles.

`font-size: inherit` and `font-family: inherit;` on `<input/>` elements
will go a long way toward delivering the styling that you actually want
without forcing you to repeat styles.

[Here's an example](http://jsfiddle.net/wg3qb4b4/).

Just add the `inherit` value for the properties that you really want.

---

Replaced elements cannot have `:before` and `:after` pseudo-elements
inside of them.

My favorite way to style non-text input types (e.g. radio buttons, checkboxes)
more creatively is to put a `<div>` next to the `<input />` and use adjacent
selectors in combination with pseudo-classes e.g. `:focus`, `:checked` to put
some styling on the `<div>`, not the `<input />`.

Then you can just hide the input somewhere.

That might look something like this:

```css
input {
  position: absolute;
  left: -999em;
}

input:checked + .fakeControl {
  background-image: url('checked.png');
  background-repeat: no-repeat;
  background-position: center;
}
```

Maybe all of that lives inside of a `<label>`. Painted with broad strokes,
your choice.

The browser catches the different states of the input, but styles the adjacent
element that you specify.
