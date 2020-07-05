# Preact Habitat Starter ⚡

This is a template repository for quickly building out embeddable preact.js applications using [`preact-habitat`](https://github.com/zouhir/preact-habitat).

## Features

- Full featured preact x support
- Included webpack config that bundles your project to be dropped into any site; just link the provided javascript file, and place any empty script tag in your HTML and preact-habitat will handle the rest.
- A props system that allows you to pass in any configuration or intial data you might need. (see `src/templates/index.html`)
- Out of the box testing story using `jest` and `preact-testing-library`.
- Out of the box linting with `eslint`
- Out of the box SCSS suport (WIP)

## Why use this over any other React/Preact tooling?

Preact Habitat Starter is great when you need to quickly build out a highgly interactive app/section on an otherwise mostly static website.

Typically, I would reach for react in these situations as it's what I'm most familiar with. However...

1. React can be hard to configure properly into an existing toolchain.
2. React can be extremely heavy, especially when not configured propely (see point 1)

This is where Preact comes in:

1. Preact, and Preact Habitat in particular, makes setup dead simple as you only need to load in a javascript file, and create an html element for your app to render into.
2. Preact, being 3kb total, is magnitudes smaller than the react & react-dom packages making it a clear choice in performance sensitive situations (or in general for user experience).
3. Preact provides compat with the full react library, so you don't need to learn anything new.

I've used preact habitat starter as a skeleton for both work projects and rapid prototyping of personal projects.

## Contributing & Suggestions

Contributions and suggestions are welcome! I'm actively adding to this repo as I find things that make sense to have as defaults.

My only request is that suggestions or contributions don't make breaking / major changes to the structure of the repo. I'd like to keep the repo as extensible / composable as possible so users can easily add / remove features as needed.

Thanks!
