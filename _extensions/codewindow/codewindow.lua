-- Loads the codewindow assets for non-revealjs HTML output.
--
-- Revealjs documents get the same two files through the `RevealCodewindow`
-- plugin (see `_extension.yml`), so this filter stays out of the way there and
-- only injects the dependency for plain `format: html`. Every other format is
-- left alone, which lets the `.codewindow` div degrade to a plain code block.

function Pandoc(doc)
  if quarto.doc.is_format("revealjs") then
    return doc
  end

  if quarto.doc.is_format("html:js") then
    quarto.doc.add_html_dependency({
      name = "codewindow",
      scripts = { "codewindow.js" },
      stylesheets = { "codewindow.css" }
    })
  end

  return doc
end
