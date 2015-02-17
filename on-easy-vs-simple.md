## The One About Nested CSS and differences between "Easy" and "Simple"

Rich Hickey gave [a really excellent talk in 2011 at Strange Loop](http://www.infoq.com/presentations/Simple-Made-Easy)
about the difference between 'Easy' and 'Simple'.

The talk challenges some current best practices in the software industry
that optimize for ease-over-simplicity.

I'm going to take the gist of the talk and apply it to CSS where the last few
years have seen an increased drive toward a similar simplicity but with a
different veneer.

Hickey draws the distinction between _Easy_ and _Simple_. He makes it clear
that although they may seem similar at first, closer inspection reveals
that these terms refer to quite different things.
He argues that _Easy_ things are familiar and usually part of (or within reach
of) our skillset. _Simple_ things, by definition, are not  _Complex_. They are
unentangled.

Software writers tend to champion _constructs_ (e.g. tools, languages) that are
easy-to-use. These constructs often produce complex _artifacts_
(tangible stuff, e.g. the application that was given life at the end of
your build/deploy process).

_Easy_ things are within reach of skills that we may have already developed, and
they are optimized heavily for early speed, but they ignore complexity. Over
time, the growing complexity can reduce speed dramatically, even stopping work
entirely.  Have you ever seen a system that was so complex that meaningful work
could no longer be done in it?

On the other hand, _Simple_ things are not optimized for early speed, but
because of their nature you do not end up with complexity. You will 
consider your implementation strategies more carefully. You will probably
end up faster over time.

The true value of software is in the quality of the artifacts that it produces.
The _artifact_ is what makes it to the user, not the construct. Complexity
makes it harder to fix bugs and more difficult to reason about the system.

> "The User is not looking at our software and they don't actually care
> very much about how good a time we had when we were writing it. [...]
>
> If it works well, it'll be related to whether or not the _output_ of
> those constructs was simple. [Did the constructs yield complexity?]"
>
> *&mdash; Rich Hickey*

Hickey's talk goes through a lot of tools that lend themselves to complexity
(e.g. state, inheritance, ORMs), or simplicity (e.g. functions), but the way
we construct our presentation layer on the web isn't part of the discussion.
In light of that, it's interesting how directly-and-penetratingly the principles
apply to CSS pre-processors.

***

Nesting CSS styles via pre-processors is very convenient for developers.
It's a wonderful developer _construct_ but it introduces lots of unnecessary
complexity to the CSS _artifacts_ we're generating.

Here are some of the problems with the artifacts produced by nested CSS:

  * **Increased Filesize.** More complex CSS means larger file size, so more time is spent sending stuff over the wire.

  * **Decreased Rendering Speed.** Here's why:

    CSS rules are evaluated right-to-left, and the styles aren't painted until
    after the browser is certain that the element matches the final left-most selector.

    So if you write code like this:

    ```css
      .top-level-element {
        section.subcomponent {
          h2 {
            font-size: 2em;
            font-style: italic;
          }
        }
      }
    ```

    You're going to get an artifact something like this:

    ```css
      .top-level-element .section.subcomponent h2 {
        font-size: 2em;
        font-style: italic
      }
    ```

    Which will take significantly longer to render than CSS that only targets
    a flat selector:

    ```css
      .h2-for-top-level-element {
        font-size: 2em;
        font-style: italic
      }
    ```

    To determine how much longer, consider the routine the browser must follow
    to render a CSS ruleset to the page: every element on the page must be
    checked to see if it matches `h2`, then `.section.subcomponent`, then
    `.top-level-element`. When you have a lot of elements on the page, that's
    a lot of checking.

    The examples above are fairly tame. In the wild, it's common to see
    significantly more complexity in CSS selectors. Here's an example of a
    generated selector I found:

    ![before de-complection](http://cloud.ahfr.org/263fe0/3f3f576fa927f2933742.png)

    The ruleset above is very complex considering it could be targeted by a
    single className. This reduces size and complexity and reduces the amount
    of work the browser needs to do to render the page:

    ![after de-complection](http://cloud.ahfr.org/1ccc71/12d7893f3c2430893dae.png)

  * **Refactoring Difficulty:** When CSS rulesets are smaller and better-factored,
    it's suddenly possible to discover and pluck out new abstractions, usually
    by extracting common stuff to a reusable class. The other benefit here is
    overriding styles. The flatter our styles are, the easier they are to
    override. Just because you don't need to override the styles now doesn't
    mean you won't need to do it a year from now.

  * **Refactoring Difficulty _Part Two:_** This one isn't actually about
    difficulty, it's about possibility. If you do a really great job at keeping
    the CSS well-factored, you may discover that your 'structure' CSS is
    separate from the 'skin' CSS. Or at the very least, that you might be able
    to separate them. Dedication to keeping complexity low will pay off when
    you're eventually asked to give the components a new look and feel.

    In theory, many of the structural patterns that your present-and-future
    app depend on will have already been discovered and you will have written
    CSS for them.

Nicole Sullivan ([@stubbornella](https://twitter.com/stubbornella)) said
"Never go more than three levels deep!" in reference to selector-nesting at
JSConf almost three years ago (homage to *Inception*).

Great coders like Jacob Thornton ([@fat](https://twitter.com/fat)) and
Harry ([@csswizardry](https://twitter.com/csswizardry/)) think it's best to not nest CSS at all.

Nicolas ([@necolas](https://twitter.com/necolas)) has been telling us for a few years that we need better structure.

Adam Morse ([@mrmrs](https://twitter.com/mrmrs)) has similarly been teaching us
that simpler is better.

Soon or later that app is going to get big, and some time after that, it will
have to change. Simplicity is usually better for dealing with that change.
