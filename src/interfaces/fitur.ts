import type { User } from './user'

export interface Fitur extends Omit<User, 'professional'> {
  description?: string
  company?: string
}
