Code Review
===========

Here is what I look for when reviewing CSS:

1. *"Magic" Numbers*
2. *Difference-To-Comp*
3. *Scalability* (e.g. "would this UI element still behave/look
   near-or-identical to our intent if e.g. the width of the containing element changed?
4. *Repeated CSS*
5. *Tricky Incanting*
6. *Repeated Variables*
7. *Unnecessary Specificity*
8. *Selector Misqualification*


When I review CSS I check out the branch and play with the element in the DOM inspector.

Points of Discipline
====================
* Read the code.
* Also try the work, compare to the comp, play with it, inspect it with developer tools, check for affect leaks, etc.
* Resist the urge to _just_ read the code. CSS syntax is easy, reading the code doesn't do much.
* Make sure that it behaves as expected in all browsers. To keep compatibility high, only resort to tricks as a last measure.
* Make the change that makes the future better. CSS is easy to write.
