# Changelog

All notable changes to the codewindow extension are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

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
