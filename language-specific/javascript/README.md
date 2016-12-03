# Javascript Demo
Demo repository for javascript projects

# Components

## Babel

Newer standards for JavaScript make code a lot cleaner and nicer, but often are
not supported in all runtimes. Babel compiles newer JavaScript to older
JavaScript so that it is compatible with all platforms. Run `npm run build` to
compile all source files.

## ESLint

ESLint will check your code formatting and semantics such that they adhere to
a certain standard. Execute `npm run lint` to run the linter. Commited code must
have no linting errors.

## Browserify

For those writing JavaScript for the web browser, you can use Browserify to
package all your classes, scripts and node_modules into a single file.

Run `npm run browser`, or `browserify main.js -o browser.js`. Note that
regardless of how many files you have, you only need to specify one main
entrypoint - the rest will be parsed and included automatically.
