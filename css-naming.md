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
  * `.componentName-descendantName` - we have liberated the hyphen. It can now work for us to provide an additional dimension (or more) of meaning.
    * spec gives us a-z, hyphen, underscore. it also gives lots of other characters, but these extra characters require escaping, so we should never use them.
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


## What are some good reasons to not style directly to tagName?
* *Not tied directly to that tagName.* If you need to change the tagName
  you're targeting somewhere down the line, then you have additional code that you must change.


## What are some good reasons to style directly to tagNames?
* *You aren't the one writing the markup.* Particularly if your Users are generating markup, you want to be  able to generate simple base elements and styles for them and you'll want that to be portable.


## What are some misguided justifications for styling directly to tagNames?
* *"Our HTML must be be semantic, so our CSS
   must be simple and target tagnames when convenient."*
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


