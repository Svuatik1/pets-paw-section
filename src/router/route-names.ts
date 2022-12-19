import { contactsRoutesNames } from '@/views/contacts/contacts.routes'
import { authRoutesNames } from '@/views/auth/auth.routes'
import { homeRoutesNames } from '@/views/home/home.routes'

export const routeNames = {
  rootPage: 'rootPage',
  ...contactsRoutesNames,
  ...authRoutesNames,
  ...homeRoutesNames
}
