# data-testid-inspector

## What is this?

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) that will show you what elements in your web page have a `data-testid` attribute.

![demo](https://i.imgur.com/TFMio71.gif)

## Why would I want this?

Automation testers that write end-to-end tests can often benefit from targeting/interacting with elements in the page via `data-testid`’s that remain constant instead of relying on the underlying element type or classes etc that are susceptible to change. Doing so ensure the tests they write are less brittle. This tool will help them quickly visualise what is available in any given page and allow them to write tests faster {…:heart:}

From a developers perspective it can also be useful. As your application grows, you often end up with complex components that are built from other smaller ones and there is no guarantee that IDs remain unique as more are added to your codebase. This bookmarklet can go someway to identifying whether a duplicate ID is present in a page.

## How do I use it?

1. Copy the code from [index.js](https://github.com/sekhavati/data-testid-inspector/blob/master/index.js) to your clipboard
2. Open a browser that has support for bookmarklets (eg: Chrome)
3. Create a new bookmark and paste the code into the field you would normally enter a URL
4. Open any webpage and click the bookmark

Any elements in the page with a `data-testid` attribute will be highlighted and their ID displayed alongside.

## Can I use a different test id attribute?

If you use a different attribute name for your test id's you can configure this [here](https://github.com/sekhavati/data-test-id-highlighter/blob/master/index.js#L2)
