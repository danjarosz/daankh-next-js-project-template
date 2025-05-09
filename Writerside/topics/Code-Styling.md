# Code Styling

To keep consistency in code formatting, this template contains a predefined `.editorconfig` and
uses [Prettier](https://prettier.io).

Once you initialize a project using this template, **ensure that Prettier is enabled in your IDE** and **uses config
provided within this template**.

You don't have to install Prettier separately. It is already included with `package.json`. Avoid using global Prettier
installation.

## Modifications

If you have to change code formatting, you can modify these files:

- `.editorconfig`
- `.prettierrc`
- `.prettierignore`

## Scripts

Use

```bash
npm run format
```

to format all the files in the project in the way required by Prettier configuration.
