# E2E and Acceptance tests

For implementing both **E2E and acceptance tests**, there is prepared an environment based
on [Playwright](https://playwright.dev/docs/intro)

Playwright is configured in the way, that required writing tests in the given directories:

- `/tests/e2e` - for E2E tests
- `/tests/acceptance` - for acceptance tests

All the test files should have an extension of `*.spec.[ts|tsx]`.

**Remove all example tests before one starts coding the project!**

## Modifications

If you have to modify the configuration of E2E tests, modify these files:

- `playwright.e2e.config.ts`

If you have to modify the configuration of acceptance tests, modify these files:

- `playwright.acceptance.config.ts`

## Scripts

Running tests in headless mode:

```bash
npm run test:e2e
npm run test:acceptance
```

Running tests in UI mode:

```bash
npm run test:e2e:ui
npm run test:acceptance:ui
```

Ensure Playwright is installed via:

```bash
npx playwright install
```

and the development server is running:

```bash
npm run dev
```

before you run ui mode.

## GitHub Actions

The file `tests_playwright.yml` inside the directory `.github/workflows` contains predefined GH Action to automatically run
the tests on the `main` branch.
