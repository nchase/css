## Type

This game-changing/feeling-evoking quality is commonly ignored or misattended to on the web.

Here's how to make it work:

* Decide whether or not Type is an integral part of your app. If your app is meant to be consumed as the classic notion of [Hypertext](http://en.wikipedia.org/wiki/Hypertext), or if it creates things that are meant to be consumed in the mental model of the notion of Hypertext, or if your app could be described or built really similarly for the [Print](http://en.wikipedia.org/wiki/Print) medium, Type is probably an integral part of your app.
* Trust your designers. Your designers will have thought about the "vertical rhythm" for that context (often times, vertical rhythm is meant to be the same throughout an entire page, but if your app has any notion of pluggable user-facing widgets or a notion of a 'frame', this may not be the case).
* When building vertical rhythm into a context, limit bi-directional margin declarations.
* Avoid specifying units for `line-height`, especially the `em` unit, unless there's a really good reason for it.
  * Usually you want `line-height` to be computed relative to the `font-size` of an element, not the parent el.
    e.g. if parent has `font-size: 36px; line-height: 1.6em` and it has a child with `font-size: 14px`,
    the child gets a computed `line-height: 57.6px` which is probably much larger than anyone intended.
    If you use unit-less `line-height` the child element gets the more appropriate computed `line-height: 22.4px`.
