import { BettererTest } from '@betterer/betterer'
import { bigger } from '@betterer/constraints'
import { eslint } from '@betterer/eslint'

import * as glob from 'glob'
const Glob = glob.Glob

export default {
  'e2e test files should grow': () =>
    new BettererTest({
      test: () => getNumOfE2eTestFiles(),
      constraint: bigger,
    }),
  'unit test files should grow': () =>
    new BettererTest({
      test: () => getNumOfUnitTestFiles(),
      constraint: bigger,
    }),
  'eslint rules': () =>
    eslint({
      'sonarjs/cognitive-complexity': 'error',
      'no-await-in-loop': 'error',
      'max-lines-per-function': ['error', 50],
    }).include('src/**/*.ts'),
}

function getNumOfE2eTestFiles(): Promise<number> {
  return new Promise((resolve: (value: number) => void, reject) => {
    new Glob('test/**/*.e2e-spec.ts', (err, matches) => {
      if (err) {
        return reject(err)
      }
      return resolve(matches.length)
    })
  })
}

function getNumOfUnitTestFiles(): Promise<number> {
  return new Promise((resolve: (value: number) => void, reject) => {
    new Glob('src/**/*.spec.ts', (err, matches) => {
      if (err) {
        return reject(err)
      }
      return resolve(matches.length)
    })
  })
}
