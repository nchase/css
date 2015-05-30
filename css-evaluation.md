# Evaluating Existing CSS

Here are some things to consider when evaluating existing CSS:

* Are there other (known) things coming down the pipe that might make use of this?
* Are there ['positional'](css-positionality.md) things that we already have code for?
* **Evaluate as you go along.** The first pass may produce the desired UI but it's often not as good as it could be. Too often we stop writing and evaluating at this point.
* **Check property values.** Are the values 'balanced'? Here are some examples:
  * `margin: 0 -6px 2px 11px;` - if values are unbalanced, ask why. Always ask why.
    This kind of imbalance is usually a symptom of some larger systemic ill.
    Sometimes it can be reasonable, but needs to be evaluated on a case-by-case basis.
  * Have `font-family` or `font-size` been duplicated where it may have intially made sense, but something more enduring may have satisfied the condition? (it's common for this to happen when [styling `<input>` elements](on-input-styles.md))
* What could My Designer(s) ask for within the next [reasonable-frame-of-time, maybe it's a year, maybe it's not] that we might want to accomodate?
  * examples: colorscheme, font-family, different [custom] form control styles, different [active] indicators, different icon set.
  * "[We want to do a test | We did some A/B testing, and...] All of the text in the 'Chrome' should be 2px larger."

