Writing Enduring CSS
====================

## Lifecycle of Enduring CSS:

1. Write [pre-processed|post-processed] CSS

2. Evaluate the CSS
  * Are there other (known) things coming down the pipe that might make use of this?
  * Are there [positional] things that we already have code for?
  * Evaluate as you go along. The first pass may produce the desired UI but it's often not as good as it could be.
  * Check Measurements. Are the values balanced?
    * Examples:
      * `margin: 0 -6px 2px 11px;`
      * re-defining `font-family` or `font-size` to set to some pre-existing definition (e.g. on `<input>` elements)
  * What could [Design] ask for within the next [year] that we might want to accomodate?
    * New functionality
    * colorscheme, font-family, different [custom] form control styles, different [active] indicators, different icon set.
    * "[We want to do a test | We did some A/B testing, and...] All of the text in the 'Chrome' should be 2px larger."

3. Detect Patterns, Extract Classes
  * Sometimes it's difficult to find the right abstraction
    * Be wary of premature refactoring.
      * If it doesn't feel like the right abstraction or the right de-duplication, it might be better to wait.
        * there is 'gray area' here. this part can be hard.
      * e.g. if there's overlap in what the code does, but no unifying concept that makes sense as an abstraction, it _might_ be too early to refactor.

4. (w/ component system e.g. react) Extract patterns repeated across many UI elements to components themselves
  * Use Case: "I can see some other piece of the UI using this exact class".
    * Extracting it to a component makes it possible for someone else to build something useful with it without thinking about the CSS. This is important because some people do not like to write CSS.
  * Examples:
    * something that we've already built
    * something that we plan to build (e.g. there's a comp for it)
    * something that doesn't exist, but might exist

## Breaking The Naming Convention

Hypothesis: We can have more-composable, faster (performance) and faster (time-to-develop) components by breaking away from our current naming convention.

* `.component-name` - this is our current practice. it only allows for one dimension of identification.
  * example - let's make a special list:
    ```css
    ul.adorned-list {
      margin: 0 0 1em;
      list-style: none;

      li.list-item {
        position: relative;
        padding-left: 20px;
        margin-bottom: 0.66em;

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

    compiles to:

    ```css
      ul.adorned-list {
        margin: 0 0 1em;
        list-style: none;
      }
      ul.adorned-list li.list-item {
        position: relative;
        padding-left: 20px;
        margin-bottom: 0.66em;
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
* `.componentName` - this in-and-of-itself is not better.
  * `.componentName-descendantName` - we have liberated the hyphen. It can now work for us to provide an additional dimension (or dimensions) of meaning.
    * spec gives us a-z, hyphen, underscore. it also gives lots of other characters, but they require escaping, so we should never use them.
    * `.componentName-descendantName--modifierName`

      ```css
        .adornedList {
          margin: 0 0 1em;
          list-style: none;
        }
        .adornedList-listItem {
          position: relative;
          padding-left: 20px;
          margin-bottom: 0.66em;

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
          padding-left: 20px;
          margin-bottom: 0.66em;
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

* responsive: we should be adding things, not taking them away
* "add things, don't take them away" directive fights with nesting.



Reflection
==========

Here are the questions I ask after I write CSS:

* Did I match the design?
* Did I repeat code?
  * If there is repeated 'positional' code, can I extract that out into a 'class'
    and immediately start using that class safely?
* Did I target the elements I'm interested in appropriately?
  i.e. not too specific, not too broad, not tied
  to a tagName unless there's a good reason to do so


What are some good reasons to not style directly to tagName?
============================================================
* Not tied directly to that tagName. If you need to change the tagName
  you're targeting somewhere down the line, then you have additional code that you must change.


What are some good reasons to style directly to tagNames?
=========================================================
* 


What are some less-than-good reasons to style directly to tagNames?
===================================================================
* *"Our HTML must be be semantic, so our CSS
   must be simple and target tagnames when convenient."*
  The advantages here are unclear on a few levels:
    1. Semantic HTML is largely irrelevant in web applications.
       Search Engines do not index the 'chrome' (in this case, the 'chrome' is the HTML that our web app servers send the users who are interacting with our software) of a web application. Sometimes it's nice when the HTML is semantic, but it's hardly necessary and should be abandoned when it introduces its own constraints and issues with your application. Note that this ABSOLUTELY does not apply to "external" sites e.g. the site describing the product to users who find it on google or get a link to our homepage.
    2. The CSS that we write has nothing to do with HTML-style semantics.
    the semantic that we're trying to satisfy and close in on here is
    "can developers who are trying to understand meaning and relationships
    between things in this CSS codebase understand what's going on here
    quickly enough to make changes."


Code Review
===========

Here is what I look for when reviewing CSS:

1. "Magic" Numbers
2. Difference-To-Comp
3. Scalability (e.g. "would this UI element still behave/look
   near-or-identical to our intent if e.g. the width of the containing element changed?
4. Repeated CSS
5. Important (not `!important` properties declared in a way that the reader could miss)
6. Repeated variables
7. Unnecessary specificity and mis-qualification


When I review CSS I check out the branch and play with the element in the DOM inspector.

You cannot do OK review of CSS just by reading the code.
You cannot do good review of CSS without:
  1. Looking at the comp
  2. Checking out the branch and running the code in a browser or two.


On 'Positionality' of Properties and Extracting/Refactoring
===========================================================

Basically, don't try to extract non-positional properties to limited-responsibility utility classes unless they're deeply important to your app. In other words, a single class for `font-weight: bold;` is probably not worth it.

More broadly, on the 'positionality' side: you should aim for particular sets of property _incantations_j
that predictably do certain positional things.

One such incantation that people learn early-on is `margin: 0 auto` - "center my element horizontally."
