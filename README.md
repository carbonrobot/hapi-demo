# Hapi REST API Demo

Demo of Hapi REST API

## Getting Started

Install yarn if not already installed: https://yarnpkg.com/

Run `yarn install` from a shell or bash based window, then execute any of the following commands. To execute deployments, you must have configured your default AWS profile with an account that has access to Lambda, API Gateway, and Cloudformation.

## Development server

Run `npm start` for a dev server. View the swagger file at `http://localhost:3000/swagger.json`.

## Debugging server

Run `npm run debug` for a debuggable instance. Setting the `NODE_ENV` variable to whatever environment you are running in will load the correct config. `dev, qa, stage, prod`

## Running unit tests

Run `npm test` to execute the unit tests via [Jasmine](https://jasmine.github.io/). To get detailed debugging output, run the tests with `DEBUG=true npm test`.

## API Documentation

API documentation is provided by Swagger and can be accessed at http://localhost:3000/api/docs.

