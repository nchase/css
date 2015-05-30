# The Notion of 'Components'

The term 'component' is borrowed from Douglas Mcllroy's notion of
[software componentry](http://en.wikipedia.org/wiki/Component-based_software_engineering#History).
His notion of components is broad and brilliant and may be applied to all of software.
Here we're only interested in user interfaces for web browsers, so for now let's
peel away everything that _isn't_ software for a web browser.

Next let's separate the different libraries that _build_ components
from the notion of a component outside of that.

A component is a discrete piece of a user interface that can be used in
concert with other components to build up an entire user interface.
A component itself may be composed of other components or lower level
_primitives_.

## 'Primitives'

Thinking in terms of HTML elements, a _primitive_ is an element that
the browser provides as part of a given `DOCTYPE`. These elements are sometimes
useful unto themselves but more often they're too small to be used as a
building block in a user interface.

Our smallest components are built up out of HTML element-primitives.


Also see: ["CSS Naming"](css-naming.md)
