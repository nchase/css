## Breaking The Naming Convention

You can have more-composable, faster (performance) and faster (time-to-develop)
components by breaking away from selector styling conventions that overload
a separator character (e.g. the hyphen character `-`).

It's common to see the separator character used to denote hierarchy _and_
to represent human-parsed naming semantics (e.g. a space between words).
This leads to complexity.

`.component-name` - this is a common practice. it only allows for one dimension
of identification in that particular class. The `-` just means something like
_"I want an identifier that I'd write with a space if I was writing it
for humans to read."_

Let's make a styled 'list' component as an example.

---

This example contains a few complexity-increasing practices alongside
the one mentioned above:

```css
ul.adorned-list {
  margin: 0 0 1em;
  list-style: none;

  li.list-item {
    position: relative;
    padding-left: 1.25em;
    margin-bottom: 1em;

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      background-image: ('bullet.png');
      background-repeat: no-repeat;
    }

    &.list-item-highlighted {
      &:after {
        background-image: ('bullet-special.png');
      }
    }
  }
}
```

The pre-processed CSS above compiles to:

```css
ul.adorned-list {
  margin: 0 0 1em;
  list-style: none;
}
ul.adorned-list li.list-item {
  position: relative;
  padding-left: 1.25em;
  margin-bottom: 1em;
}
ul.adorned-list li.list-item:after {
  position: absolute;
  top: 0;
  left: 0;
  background-image: 'bullet.png';
  background-repeat: no-repeat;
}
ul.adorned-list li.list-item.list-item-highlighted:after {
  background-image: 'bullet-special.png';
}
```

There are a few problems here but let's just focus on one:
Given the dash-as-semantic-space paradigm, we have no way of
suggesting _hierarchy_ with a single classname.

---

`.componentName` - we have liberated the hyphen, but this in-and-of-itself
is not better. However, it unlocks another iteration.

---

`.componentName-descendantName` - we have revealed the new meaning of the hyphen. It can now work for us to provide additional dimensions of meaning (or potentially many dimensions), but never again will it have its old semantic meaning.

This convention is borrowed from the [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). The SUIT CSS convention is a flavor of block-element-modifier methodology.

---

## Quick Aside on Allowable Characters In Selectors

[The specification gives us a-z, hyphen, underscore](http://www.w3.org/TR/CSS21/syndata.html#characters) as viable characters in a CSS class.

It also gives lots of `ISO 10646` characters, but these extra characters must be escaped, so we should probably never use them.

---

## Using The New Convention

`.componentName-descendantName--modifierName`

```css
.adornedList {
  margin: 0 0 1em;
  list-style: none;
}
.adornedList-listItem {
  position: relative;
  padding-left: 1.25em;
  margin-bottom: 1em;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    background-image: 'bullet.png';
    background-repeat: no-repeat;
  }
}

.adornedList-listItem--highlighted {
  background-image: 'bullet-special.png';
}
```

compiles to:

```css
.adornedList {
  margin: 0 0 1em;
  list-style: none;
}
.adornedList-listItem {
  position: relative;
  padding-left: 1.25em;
  margin-bottom: 1em;
}
.adornedList-listItem:after {
  position: absolute;
  top: 0;
  left: 0;
  background-image: 'bullet.png';
  background-repeat: no-repeat;
}
.adornedList-listItem--highlighted {
  background-image: 'bullet-special.png';
}
```

---

## Styling to Element Tags

### What are some good reasons to not style directly to tags?

* *Your styles aren't tied directly to that tag.* If you need to change the tag
  you're targeting somewhere down the line, then you have additional code that you must change.
  If you have to style directly to a tag, then you have broken the principle of separation of content from presentation-of-content.


### What are some good reasons to style directly to tags?

* *You aren't the one writing the markup.* Particularly if your Users are generating markup through some tool (e.g. WYSIWYG, CMS), you want to be able to generate simple and sensible styles for them and you'll want that to be portable. So it might make good sense to style directly to tags when you're dealing with user-generated content.


### What are some misguided justifications for styling directly to tags?

* *"Our HTML must be be semantic, so our CSS
   must be simple and target tags when convenient."*
  The advantages here are unclear on a few levels:
    1. Semantic HTML is largely irrelevant in web applications.
       * Search Engines do not index the 'Chrome' of a web application.
       * Sometimes it's "nice" when the HTML is semantic.
         This should be abandoned when it introduces constraints on the application
       * Note that this ABSOLUTELY does not apply to crawled sites/web-facing pages (SEO is important)
       * If the user has to log in to get to the page, the 'semantic' value of the HTML may not be
         worth preserving.
    2. The CSS that we write has nothing to do with the HTML and SEO notion of semantics.
    3. The the semantic that we're trying to satisfy and close in on here is
       > "The network of meaning and relationships between things that allows us to make changes
       >  quickly and effectively without much fear or guessing with as much flexibility as necessary."

---

Also see: ["CSS Componentry"](css-componentry.md)
