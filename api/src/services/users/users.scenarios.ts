import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String535813',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-05-27T14:43:40.404Z',
      },
    },
    two: {
      data: {
        email: 'String2835366',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-05-27T14:43:40.404Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
