# On 'Positionality' of Properties and Extracting Code

'Positionality' is a made-up word that I use to differentiate CSS properties that change where a thing appears on a page from CSS properties that change some other aspect of the thing (e.g. color, size, shadowing, text).

'Positionality' is defined by particular sets of property [_Incantations_](css-incantations.md).

One such incantation that people learn early-on and use without much thought is `margin: 0 auto` - "center my element horizontally."
The truly important part here is that the left-and-right element margins are set to `auto`.

If there's some existing incantation that surprisingly does a new thing, it is probably a good thing to extract into a limited-responsibility class.  Once in a while, entirely new things will be introduced into a spec or draft and this that allows for useful and entirely new incantations.  Extracting these kinds of useful things to limited-responsibility classes gets developers toward the convenient ability to declaratively define where an element should appear. And if you don't know the spec really, really well, my argument is that these kinds of declarations are more useful than the granular and primitive properties that we're given for the CSS Layout Engine.

[Typography](type.md) can also benefit from this kind of extraction, but for Type instead of Position.

In both cases, it's important to try to nail the granularity of the incantation. In other words, a single class for `font-weight: bold;` may not worth it some apps, but you might want to extract a larger Typographic incantation that includes `font-weight: bold;` that makes it easier to nail the app-or-region's typography.


---

Also see: ["Refactoring CSS"](css-refactoring.md)
