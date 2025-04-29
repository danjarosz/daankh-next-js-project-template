# Documenting

Use this [Writerside](https://www.jetbrains.com/writerside/) project to prepare written documentation.

- Do not remove the `Environment` section.
- Rename the main title of the docs. Make it corresponding to your project name.
- Continue documenting your application after the `Environment` section.

During the development, use [Storybook](https://storybook.js.org/docs) to document the library of UI elements that are
used in the entire project.

Storybook stories should be located in the directory `/stories`

**Clean up `/stories` ones you start including your components**. Initially, this directory included examples.

## Modifications

Configuration of the Storybook is located in the directory `/.storybook`, so modify files inside it to change
the configuration.
