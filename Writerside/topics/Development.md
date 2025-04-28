# Development

It is preferred to use Docker to develop the application. Once you have Docker installed on your local machine, use:

```bash
npm run dev:docker
```

to run the Docker image of the application in the development mode.

Even though Docker is preferred, you still can run an application without it, using:

```bash
npm run dev
```

If Docker is not required for the project, you can remove the files below:

- `Dockerfile`
- `docker-compose.dev.yml`

Or modify Docker settings using them.
