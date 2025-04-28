import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Create an MSW server instance with handlers
export const server = setupServer(...handlers)
