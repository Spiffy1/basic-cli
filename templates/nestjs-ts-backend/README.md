<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This service convert a webpage to PDF. It makes use of an automation test engine called playwright to render the browser in headless mode (without actually openning the browser). Overall, this is a very straight forward demonstration. Despite being younger in the market when compare to Puppeteer, Playwright offer flexibility when it comes to configuring your browsing requests.

Main code quality packages are linter, sonarjs, cspell, betterer.  
Further quality procedures such as commit lint, sentry will be added later on.

## Installation

```bash
$ npm install
```

## Deployment

```bash
# Build image
docker build . -t playwright-on-node
# Deploy service
docker run -it --publish 3000:3000 -d --init --user pwuser  --name playwright playwright-on-node
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Before Commit

```bash
# check code convention
$ npm run lint
# check spelling
$ npm run cspell
# check code quality with betterer
$ npm run betterer
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger

[Link](http://localhost:3000/api/)

## Curl

```bash
curl --location --request POST 'localhost:3000/converters/pdf' \
--header 'Content-Type: application/json' \
--data-raw '{
    "websiteUrl" : "https://google.com"
}'
```

## Todo

[x] - HTML to PDF converter  
[x] - Rewrite Module to make it more dynamic  
[x] - Render the website, including images  
[x] - Dockerize & package service  
[x] - Setup standard code quality/rules with linter  
[x] - Check code smell & cognitive complexity with sonarjs  
[x] - Setup spell checker  
[x] - Setup standard code quality check with betterer  
[x] - Track code commit & error with sentry  
[ ] - Use Conventional Changelog to auto generate changelog & structurize commit history  
[ ] - Load dns var from env var in Dockerfile  
[ ] - Setup code commit with husky  
[ ] - Refactor Sentry code for ease of access  
[ ] - Unit test

## Optional

[ ] - Setup Authentication module

## Reference

[Check Cognitive complexity with Sonarqube](https://www.sonarsource.com/resources/cognitive-complexity/)  
[Incremental Development with Betterer](https://phenomnomnominal.github.io/betterer/docs/introduction)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Phan Nguyen](https://github.com/Spiffy1)

## License

Nest is [MIT licensed](LICENSE).
