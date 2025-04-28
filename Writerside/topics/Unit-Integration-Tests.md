# Unit &amp; Integration Tests

For implementing both **unit and integration tests**, there is prepared an environment based
on [Jest](https://jestjs.io) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

Jest is configured in the way, that required writing tests in the given directories:

- `/tests/unit` - for unit tests
- `/tests/integration` - for integration tests

All the test files should have an extension of `*.spec.[ts|tsx]`.

**Remove all example tests before one starts coding the project!**

## Modifications

If you have to modify the configuration for unit and integration test, modify these files:

- `jest.config.ts`
- `jest.setup.ts`

## Scripts

To run jest tests, use the command below:

```bash
npm run test
```

## GitHub Actions

The file `tests_jest.yml` inside the directory `.github/workflows` contains predefined GH Action to automatically run
the tests on the `main` branch.
