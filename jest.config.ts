// jest.config.ts
import type { Config } from '@jest/types'

// Or simply use `export default` if you don't want to use `const` declaration
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: './tsconfig.test.json'
    }]
  }
}

export default config
