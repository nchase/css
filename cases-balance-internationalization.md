# CSS Case Study #1: Inheritance, Balance and More

Let's talk about a couple of useful strategies toward hunting down
improvements for this UI.

---

## 1. The Boxes. Look At The Boxes.

Whenever you're looking to improve some CSS, start by drawing the boxes to the
screen. Also look to your elements's padding - anything that takes up space or
affects document _flow_ as defined in CSS 2.1.[^1]  What you want to see is
balance and box paints that represent the elements as the user would see them
on the screen.

What you don't want to see is 'deflated' elements or otherwise off-balance
elements that do not reflect what the user sees. This usually points to problems
in the CSS.

Here's a sidebar example with multiple opportunities for improvement.
It can be made simpler, faster, easier to maintain and easier to change.
The following step set focuses on **balance**.

<iframe src="examples/sidebar.html"></iframe>

---

## 2. What Did We Solve?

This was a simple change (end result: equal `padding` on both sides of the
navigation items, not just one) The effects of the final state above are
invisible to users. The problems we solved, however invisible they may seem,
are sharp pains if they ever manifest.

Here are a couple of the problems we solved:

1. We won't have to go back and re-write this code for long-text scenarios
   (think toward internationalization/translation, textchange requests,
   new menu items)
2. Intent of system is expressed more fully. If the developer asked the designer
   "is it OK if the text butts-up against the right side of the sidebar?",
   the designer never would have said yes.

---

## 3. What's Next

The system has more balance and as a positive side-effect, internationalized
text will work and the system is more robust in the face of some other kinds of
change.

Remaining questions about this sidebar component:
1. What's the deal with the outermost containing elements?
   (Why does it exist? What does it serve?)
2. Why does the absolute positioning start so far down into the component?
3. Why is the same font stack declared three times in the same sidebar
   component?
4. Where else can we add balance?
5. A number of other useful things, including, but not limited to:
6. Better responsive behavior
7. Roughly 25% code reduction, resulting in clearer code

<style>
  iframe {
    margin: 1em;
    height: 480px;
    border: none;
    background-color: #eaeaea;
    border-radius: 5px;
  }
</style>


[^1]: [Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification, 9.4, _Normal Flow in the Visual Formatting Model_](http://www.w3.org/TR/CSS21/visuren.html#normal-flow)
