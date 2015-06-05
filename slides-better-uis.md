<style>
  body {
    color: #636363;
    background-color: #FDF6E4;
    font-family: Avenir, sans-serif;
  }

  @media print {
    body {
      padding: 1em 2em;
      -webkit-print-color-adjust: exact;
    }
  }

  .effect {
    display: inline-block;
    position: relative;
    top: -0.25em;
    left: 0.5em;
    font-family: monospace;
    width: 2em;
    height: 2em;
    vertical-align: middle;
    animation: rotate 1500ms 30;
  }
  .effect:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #E51608;
    border-radius: 20%;
  }
  .effect-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin: auto;
    text-align: center;
    line-height: 1.8;
    color: #fff;
    animation: inherit;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  code {
    padding:  0 0.5em;
    background-color: #FFFEF9;
    border-radius: 0.25em;
  }
  a {
    color: #07B3DF;
  }
</style>



## We have inconsistent UI quality.


## In some places, even in our newer products, the UI isn't as good as it ought to be.


## UI work on the web is not inherently 'sexy'


## UI work on the web is incredibly important

* Our customers do not relish our architecture or any of the _constructs_
  that we use to build our _artifacts_.
* They give us money in exchange for great experiences in the tangible parts
  of our product(s).
* Beautiful, transformative, high-performance experiences can be built on the web.


![ppk](http://cloud.ahfr.org/302cc0/2df9d64a959582928c32.jpg)



# Building Better UIs <div class="effect"><div class="effect-content">{}</div></div>

Five Weird Tricks To Improve UI Build Quality

Noah Chase ([@nchase](https://github.com/nchase)), 2015



## 1. Code Review: Dive Deeper Than Syntax-Scanning

* Fiscal 2015's Prevailing UI change review process:
  * <!-- .element class="fragment" --> Scan code
    * <!-- .element class="fragment" --> look for syntax err;ors,
    * <!-- .element class="fragment" --> look for places to reduce duplication duplication
    * <!-- .element class="fragment" --> look for Inconsistencies with prevailing Styl<strong>e</strong>
  * <!-- .element class="fragment" --> ![`:shipit:`](http://cloud.ahfr.org/0cc8c418aedaf1254d93.net/main-qimg-0bf1d3de309a89d9ed70ae91f6271a7f)


## How can we improve this?

* <!-- .element class="fragment" --> Reviewing code? Run the code on your machine
* <!-- .element class="fragment" --> Play with the UI element(s) indicated in the story/changeset
  * <!-- .element class="fragment" --> Open Developer Tools, see how the browser renders it/them
* <!-- .element class="fragment" --> Open {Photoshop} and compare the dev work to the comp

Note:

1. Maybe you're not as good at reviewing design as Justin,
   but you're probably better than QBurst (unless we're talking about Lovely)
2. There are many ways to do this, but semi-transparent screenshot overlay helps quite a bit.



## 2. Challenge The Definition of 'Done'

* <!-- .element class="fragment" --> Fiscal 2015: "Done" == "similar to the comp"
  * <!-- .element class="fragment" --> Sometimes means "if I showed a designer, they might be unhappy"
  * <!-- .element class="fragment" --> Often considered done upon the first iteration that achieves "similar to the comp"
  * <!-- .element class="fragment" --> Would we settle for this elsewhere?
  * <!-- .element class="fragment" --> Probably not. Let's step up our game


## First working attempts can often be achieved more simply on second pass

* Use the most recent known-good pass as your guide to inform subsequent passes
* Browser tabs. Use them!


## Reflection Questions:

* <!-- .element class="fragment" --> Is the code overly clever?
* <!-- .element class="fragment" --> Is the code grueling to read?
* <!-- .element class="fragment" --> Is there vestigial CSS that-maybe-never-even-worked-to-begin-with?


## Performance

* "Performance is a feature."
  * CSS selectors are evaluated right-to-left. Avoid multi-level nesting.
  * Steve Souders: "High Performance Websites (2005)"

Note:

1. Steve Souders literally wrote the book on performance.
   Has worked at Google and Yahoo as head of performance engineering.
2. If possible, be mindful of how a page feels before and after a change is introduced.
   If you have a weird feeling, open developer tools's Network or Profiling panels


## Measurement

* Always, always, always open in Photoshop and measure. Get good at measurement.
  * Practice measurement.
  * <!-- .element class="fragment" --> 2px is slightly meaningful on a 960px wide element - if I show it to you in isolation, you might not notice, but you'll notice 958px alongside 960px elements.
  * <!-- .element class="fragment" --> 2px is enormously meaningful on a 10px wide element.

Note:

1. On pixels: our smallest elements are sometimes in the 20s of pixels. If you're off by 2 pixels, you're off by 10%.


If it feels like there's a lot of code, often times, yeah, there's just too much code.


* Consider the designer's constraints and apply them to your work:
  * Symmetry
  * Rhythm
  * Proportionality
  * Scalability

* Find the pattern/symmetry/ratio!!



## 3. Building Something Challenging? Reduce Your UI

* Exercise: try building in a "clean" environment [_just_ the styles you need.]
* Remove ornamentation during reduction exercises.
* Make everything ugly and obvious. Use `outline`.
* Draw it out. If you struggle to draw the UI based on the rules of CSS,
  you need to strengthen your mental model.

Note:

1. Mention Pesticide alongside ugly + obvious + outline



## 4. Understand Your Code

* If you don't understand the code, you should be wary of writing it.
  * In fact, maybe, probably, definitely come to a better understanding of it first.
  * If you don't get it, ask your neighbor.
  * If neither of you know: that's fine, there's a lot in the spec,
    no one knows everything about anything. (But find an answer!)


## The CSS Layout Engine

* CSS Layout Engine, Version Post-2.1, many more specs to come, [not CSS4]
  * Shapes
  * New Selectors
  * Variables
  * Color Modification

Note:

1. The fact that there's no CSS3 or CSS4 is much like ECMAScript 2015, 2016, etc.


## People in the World are 'Down' on CSS.

* <!-- .element class="fragment" --> CSS can be challenging: old browsers, vendor prefixes, etc
* <!-- .element class="fragment" --> But CSS is here and we have it now.
* <!-- .element class="fragment" -->  We build user interfaces on the web for web browsers, primarily. CSS is _the_ option.
* <!-- .element class="fragment" -->  All of the things that you want to use to build UIs for you are compiled to CSS, regardless of whether or not they're written in it


We can build beautiful, transformative, high-performance experiences on the web.

<!-- .element class="fragment" --> We can build slow, middling experiences on web, native, or anywhere else.


## How can we improve?


## Read the Spec [HTML, CSS]
  * OK, read parts of the spec that are relevant to _your_ problem
  * OK, now that you have been building UIs on the web for a while,
    try reading the spec thoroughly
  * CSS 2.1 specification is key. Do I have time for excerpts? [W3C CSS 2.1 Link](http://www.w3.org/TR/CSS21/visudet.html#line-height) [Codepen](http://codepen.io/anon/pen/vOmYMM) [Instapaper](https://www.instapaper.com/read/595078680)
  * HTML understanding ties directly to CSS, deeply complementary
  * <!-- .element class="fragment" --> Aural Style Sheets specification



## 5. Practice & Build, Get Regular Healthy 'Exercise'

* Piecemeal CSS work from JIRA will rarely and inconsistently get you past a skill plateau.
  * Play on the side, make things
    * If you learn something cool at work, build something that really leverages CSS nicely, etc, consider re-building it a few times.
    * Not necessary, but it will help enormously.


* User stories are usually broken down into pieces, which is good for getting things done, but it makes overall understanding a challenge. Practice allows for 'Big Picture' level thinking and experiential knowledge gains


## If you really like this stuff, read + explore more widely!

e.g. print design principles (_The Elements of Typographic Style_), web design principles (_Don't Make Me Think_), _The Design of Everyday Things_, past/present trends, philosophy, etc


## And if you don't like this stuff, the next slide is for you!


## The Sidestep

* My Assertion: Disavowal Isn't Unreasonable.
* Questioning the "anyone should pick up any story" assumptions


## Fair reasons to go disavowal route:

* Not satisfied by the work
* Find CSS revolting, a waste of time, intractable garbage
* Don't ever imagine yourself doing UI work on the web
* Parents mugged and killed by CSS selectors during childhood

* If you find it interesting, but intolerably tedious, try editor modification.



## Resources

* [github.com/nchase/css](https://github.com/nchase/css)
* [High Performance Web Sites (2005)](http://www.amazon.com/dp/0596529309)
* [Even Faster Websites (2009)](http://www.amazon.com/gp/product/0596522304)
* [Harry Roberts](http://csswizardry.com/)
* [Necolas Gallagher](https://github.com/suitcss/suit/blob/master/doc/design-principles.md)
* [@fat](http://getbootstrap.com/)
* [Nicole Sullivan](http://twitter.com/stubbornella)
* [Adam Morse](http://mrmrs.io/)



## Resources

* [Web vs. Native Redux](http://www.quirksmode.org/blog/archives/2015/06/web_vs_native_r.html)
* [Tooling is Not the Problem of the Web](https://medium.com/@sebmarkbage/tooling-is-not-the-problem-of-the-web-cb0ae1fdbbc6)
* [Sara Souidan](http://sarasoueidan.com/)
* [There Is No Such Thing As CSS4](http://www.xanthir.com/b4Ko0)
* [Aural Style Sheets](http://www.w3.org/TR/CSS21/aural.html)
* [Simple Made Easy](http://www.infoq.com/presentations/Simple-Made-Easy)
* [The Elements of Typographic Style](http://www.amazon.com/dp/0881791326)
* [Don't Make Me Think](http://www.amazon.com/dp/0321344758)
* [The Design of Everyday Things](http://www.amazon.com/dp/1452654123)
