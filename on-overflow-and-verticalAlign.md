## The One About `overflow: hidden` and `vertical-align`:

Little-known fact: The CSS2 Spec has a clause that says if you apply
`overflow: hidden` to an element, the baseline of the element may change.
This behavior is written on [the last line of Section 10 of the CSS 2.1 Spec](http://www.w3.org/TR/CSS21/visudet.html#leading):

> The baseline of an 'inline-block' is the baseline of its last line
> box in the normal flow, unless it has either no in-flow line boxes or
> if its 'overflow' property has a computed value other than 'visible',
> in which case the baseline is the bottom margin edge.

This is confusing and counter-intuitive.

If you know this, you may have run into the problem in the wild and discovered
that you need to re-set `vertical-align` on the element. This is the right way to fix the problem.
The common, wrong way to fix the problem is to tweak `top`, `margin-top`, or `padding-top` on the element.
These are wrong. They're hacks. If you're adding an arbitrary value to an element to make it line up with other elements,
you should probably take a step back and ask if there's a better way to accomplish what you're going for.
Little tweaks that utilize 'magic numbers' do not hold up very well over time. 

If you're fixing this issue the right way, you're probably in the very tiny portion of the population who has read the spec and remembered it while writing CSS. Nailing both of these things together is no easy task.
Or you were able to intuit the actual behavior spec for yourself.
Either way you're rare and special. Please share your knowledge as widely and broadly as you can.

How can anyone in the world could possibly intuit this behavior? I think I can reason through it now that I know the rule, but can anyone know this without reading the spec?

It's worth noting _just_ how widespread this issue is. A few days ago I found an example of it in the wild on Instapaper's website. Note the mis-aligned `<code>` elements:
![image of totally-busted `<code>` styles in Instapaper](http://cloud.ahfr.org/ab5ce5/07d7a9d9f434e27d191d.png)

As of posting this, the issue has not been fixed. It can easily be fixed if they set `vertical-align: middle`.
Most people will decide to set `margin-top`, or `top` to some arbitrary value. We can do better.

The next fun piece of the spec starts with this line:
> Vertical margins between adjacent block-level boxes in a block formatting context collapse.
