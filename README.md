# React UI pairing exercise

The aim is to create a responsive table similar to the screenshot in [`dashboard.png`](dashboard.png).

## System prerequisites

This app assumes you have the following installed globally:

1. nvm
2. yarn (or npm)


## Set up

Checkout a new branch:

```bash
git checkout -b some-branch-name
```

Install the dependencies and run the app:

```bash
nvm use
yarn install
yarn start
```

You can verify the application is running correctly by visiting [`http://localhost:5174`](http://localhost:5174).

## Running the tests
Run the tests in watch-mode by running:

```bash
yarn test
```

## Instructions
* All code should be written test-first (TDD)
* We want to limit the first page to only 4 visible rows
* Any data after the first 4 should be accessed via clicking a button
* Goal is to have the smallest amount of code with complete tests
