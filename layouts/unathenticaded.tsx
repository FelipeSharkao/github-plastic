import React, { ReactElement } from 'react'

import HeaderLayout from './header'
import PageLayout from './page'
import { WithChildren } from '@/utils'

export default function UnauthenticatedLayout({
  children,
}: WithChildren): ReactElement {
  return (
    <HeaderLayout>
      <PageLayout>{children}</PageLayout>
    </HeaderLayout>
  )
}
