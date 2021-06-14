import NavbarLayout from './navbar'
import PageLayout from './page'
import { ReactElement } from 'react'
import { WithChildren } from '@/utils'

export default function DashboardLayout({
  children,
}: WithChildren): ReactElement {
  return <NavbarLayout><PageLayout>{children}</PageLayout></NavbarLayout>
}
