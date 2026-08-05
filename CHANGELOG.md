# Changelog

All notable changes to the codewindow extension are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.6.0

### Added

- Window chrome (#10). The `chrome` code fence argument picks the window buttons: `mac` (the default) keeps the three round buttons on the left, `windows` puts minimize, maximize and close on the right, and `none` drops them entirely.
- Custom properties for the window geometry (`--codewindow-radius`, `--codewindow-header-height`, `--codewindow-header-pad`, `--codewindow-tab-radius`, `--codewindow-tab-gap`, `--codewindow-tab-padding` and `--codewindow-tab-inactive-opacity`), so tab and header shape can be themed the same way the colors already were.
- Color customization (#6). Every color is now backed by a CSS custom property (`--codewindow-bg`, `--codewindow-header-bg`, `--codewindow-tab-bg`, `--codewindow-tab-active-bg`, `--codewindow-color`, `--codewindow-shadow-color`) for deck-wide theming, and can be set per window with the matching `bg`, `header-bg`, `tab-bg`, `tab-active-bg`, `color` and `shadow-color` code fence arguments. A `.codewindow-dark` class gives a dark window, with syntax highlighting remapped to suit.
- `rmd` file icon, with `rmarkdown` as an alias (#3).
- `stan` and `mplus` file icons (#11).
- 15 new file icons: `sql`, `markdown`, `yaml`, `json`, `git` and `bash` for common formats and tooling; `sas`, `spss`, `stata`, `matlab`, `cpp` and `fortran` for statistical and scientific languages; and `typescript`, `rust` and `go`.
- Class aliases for existing icons, so the obvious spelling works: `scss`, `md`, `yml`, `qmd`, `jl`, `f90`, `ts`, `javascript`, `golang`, and `sh`/`zsh`/`shell`/`console` for `terminal`.

### Fixed

- `code-line-numbers` highlighting inside a codewindow. Quarto stacks a clone of the code block for each step and relies on an opaque code background to hide the one underneath, which the window unset, so the first step showed through and its lines never dimmed.

## 1.5.0

### Added

- Multiple file tabs in a single codewindow via `.editor` divs. Choose the starting tab with `.active`, and use `.fragment` to focus the next tab as the slide advances (#4).
- The `.py` class is now accepted as an alias for `.python`, matching the README.

### Fixed

- Codewindows no longer silently drop everything after the first code block. All block-level content (multiple code blocks, text, etc.) is now kept, removing the need to wrap extra content in a fenced div (#5).
- README icon list now matches the classes the plugin actually supports (documents `.python`, adds the previously undocumented `.terminal` and `.nextflow`).

## 1.4.0

### Added

- `terminal` and `nextflow` file icons.

### Fixed

- R and Python icons not rendering when multiple codewindows were present.

## 1.3.0

### Added

- `julia` file icon.

### Fixed

- iframes now work inside a codewindow.

## 1.2.0

### Added

- Additional file icons and an example showing all file icon variants.
- Example GIF in the README.

### Changed

- Optimized the inline SVG icons.

## 1.1.0

### Added

- Usage instructions in the README.

## 1.0.0

- Initial release.
