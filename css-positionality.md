On 'Positionality' of Properties and Extracting/Refactoring
===========================================================

Basically, don't try to extract non-positional properties to limited-responsibility utility classes unless they're deeply important to your app. In other words, a single class for `font-weight: bold;` is probably not worth it.

More broadly, on the 'positionality' side: you should aim for particular sets of property _incantations_j
that predictably do certain positional things.

One such incantation that people learn early-on is `margin: 0 auto` - "center my element horizontally."

