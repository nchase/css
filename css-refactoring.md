# Refactoring CSS

Extract patterns repeated across many UI elements to components.
* Use Case: "I can see some other piece of the UI using this exact class".
  * Extracting it to a component makes it possible for someone else to build something useful with it without thinking about the CSS. This is important because some people do not like to write CSS.
* Examples:
  * something that we've already built
  * something that we plan to build (e.g. there's a comp for it)
  * something that doesn't exist, but might exist


---

# Refactoring Caveats

* Sometimes it's difficult to find the right abstraction
* Be wary of premature refactoring.
* If it doesn't feel like the right abstraction or the right de-duplication, it might be better to wait.
  * there is 'gray area' here. this part can be hard.
* e.g. if there's overlap in what the code does, but no unifying concept that makes sense as an abstraction, it _might_ be too early to refactor.


Also see: ["CSS Positionality and Extracting Code"](css-positionality.md), ["CSS Componentry"](css-componentry)
