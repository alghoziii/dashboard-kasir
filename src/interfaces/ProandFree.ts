import type { User } from './user'

export interface FiturProAndFree extends Omit<User, 'professional'> {
  description?: string
}
