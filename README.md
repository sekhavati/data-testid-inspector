# data-testid-inspector

## What is this?

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) that will show you what elements in your web page have a `data-testid` attribute.

![demo](https://i.imgur.com/TFMio71.gif)

## Why would I want this?

Automation testers that write end-to-end tests can often benefit from targeting/interacting with elements in the page via `data-testid`’s that remain constant regardless of whether the underlying element changes type (eg: from `<a>` to `<button>`). Doing so ensure the tests they write are less brittle. This tool will help them quickly visualise what is available in any given page and allow them to write tests faster {…:heart:}

From a developers perspective it can also be useful. As your application grows, you often end up with complex components that are built from other smaller ones and there is no guarantee that IDs remain unique as more are added to your codebase. This bookmarklet can go someway to identifying whether a duplicate ID is present in a page.

## How do I use it?

Automation testers that write end-to-end tests can often benefit from targeting/interacting with elements in the page via `data-testid`’s that remain constant instead of relying on the underlying element type or classes etc that are susceptible to change. Doing so ensure the tests they write are less brittle. This tool will help them quickly visualise what is available in any given page and allow them to write tests faster {…:heart:}

Any elements in the page with a `data-testid` attribute will be highlighted and their ID displayed alongside.
