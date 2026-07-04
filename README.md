# codewindow Extension For Quarto

Add styled codeblock windows for code.

![](example.gif)

## Installing

```bash
quarto add emilhvitfeldt/quarto-revealjs-codewindow
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

Once an extension has been added, you can use the Reveal plugin by adding it to the `reveal-plugins` key. For example:

````` markdown
---
title: "My Presentation"
format: revealjs
revealjs-plugins:
  - codewindow
---
`````

## Using

Adding a `::: {.codewindow}` fenced div around any code chunk will turn the output into a `codewindow`. The file tab is enabled by adding plain text before the code chunk.

Adding the one of the following classes adds an icon in the file tab. File an issue to have more icons added to this list

- `.r`
- `.python` (or `.py`)
- `.js`
- `.quarto`
- `.html`
- `.css`
- `.sass`
- `.julia`
- `.terminal`
- `.nextflow`

The `width` argument can be used directly in the code fence.

## Multiple tabs

A single `codewindow` can show several file tabs. Wrap one or more `.editor` divs inside the `.codewindow` div, one per tab. Each `.editor` takes the same language classes for its icon and either a `name="..."` attribute or leading plain text for its filename.

- The first tab is shown by default. Add `.active` to a different `.editor` to start on that one instead.
- Add `.fragment` to an `.editor` to focus its tab as the slide advances (and step back when reversing).

````` markdown
:::: {.codewindow}
::: {.editor .r name="00-load.R"}
```r
data <- read.csv("my-data.csv")
```
:::

::: {.editor .r .fragment name="01-clean.R"}
```r
library(dplyr)
data <- filter(data, x > 0)
```
:::
::::
`````

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

