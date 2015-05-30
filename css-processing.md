# Processing CSS

Regardless of whether or not your code has pre-processing steps,
post-processing steps, or both, it's best to use fast tools that
other tools can easily consume via `stdout`.

An asset pipeline for CSS can be constructed entirely this way.

It's useful to have a tool that can watch for changes on one or more files
and execute commands (e.g. one-or-more compilation steps) when there are changes.

[`catw`](http://npmjs.org/catw) is one such tool.
