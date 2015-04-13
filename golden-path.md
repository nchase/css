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


Code Review
===========


stuff to look for in code review: magic numbers, stuff that doesn't look right in your dom inspector. that can be a sign of something that might be built to fail. you can't do great code review without looking at the comp and and loading the branch and opening your inspector.
