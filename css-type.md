## Type

This game-changing/feeling-evoking quality is commonly ignored or misattended to on the web.

Here's how to make it work:

* Decide whether or not Type is an integral part of your app.
  Here are some key indicators that Type is integral to your app:

  * Your app is consumed as [Hypertext](http://en.wikipedia.org/wiki/Hypertext)
  * Your app creates things that are meant to be consumed as Hypertext.
  * Your app could be described or built, conceptually, in [Print](http://en.wikipedia.org/wiki/Print)
  * Your app's main focus is somehow communicated through the written word as interpreted by humans.

* As stated above, Type is probably an integral part of your app.
* Honestly: Type is going to be, like, the most important part of your app. There are [rare] exceptions.

---

## Vertical Rhythm and `line-height`

* Trust your designers. Your designers will have thought about the vertical rhythm of the type for that context.

  Often times, vertical rhythm is meant to be the same throughout an entire page,
  but if your app has any notion of pluggable user-facing widgets or a notion of a 'frame',
  this may not be the case, worth making the distinction between these two styles.

* When building vertical rhythm into a context, limit bi-directional margin declarations.

  You don't want them. You want to extinguish them. You want to express vertical rhythm in one direction.

* Avoid specifying units for `line-height`, especially the `em` unit, unless there's a really good reason for it.

  Usually you want `line-height` to be computed relative to the `font-size` of an element, not the parent el.

  e.g. if parent has `font-size: 36px; line-height: 1.6em` and it has a child with `font-size: 14px`,
  the child gets a computed `line-height: 57.6px` which is probably much larger than anyone intended.
  If you use unit-less `line-height` the child element gets the more appropriate computed `line-height: 22.4px`.

* Avoid abusing `line-height` for vertical centering.
  `line-height` for vertical centering is only robust when there's a single line of text.


---

## Type Quirks

* Setting `font-family: monospace` makes the element's `font-size` reduce to `13px`
  and you can't fix it.  This has been documented for years now,
  most prominently by Standards afficionado Eric Meyer
  [[1]](http://meyerweb.com/eric/thoughts/2010/02/12/fixed-monospace-sizing/)
  but also by others
  [[2]](http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/).
  The quirk has remained consistent.

  If you have a sense-of or reference-to _why_ this has never changed, send me a message?
