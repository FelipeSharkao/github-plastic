import { ComponentWithLayout, EmptyObject } from '@/utils'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { memo, useContext } from 'react'

import { Attention } from '@/styles/color'
import Card from '@/components/card'
import DashboardLayout from '@/layouts/dashboard'
import Icon from '@/components/icon'
import { SessionContext } from '@/contexts/session'
import { useRepositoriesQuery } from '@/gql'

const Dashboard: ComponentWithLayout<EmptyObject> = memo(() => {
  const { login } = useContext(SessionContext)
  const { data } = useRepositoriesQuery({ variables: { login, first: 10 } })

  return (
    <>
      {data?.user?.repositories.edges?.map(
        item =>
          item?.node && (
            <Card key={item.node.id}>
              <h1>{item.node.name}</h1>
              <Attention>
                <Icon icon={faCodeBranch} /> {item.node.forkCount} forks &emsp;
                <Icon icon={faStar} /> {item.node.stargazerCount} starts
              </Attention>
              <div>
                <i>{item.node.description}</i>
              </div>
            </Card>
          )
      )}
    </>
  )
})
Dashboard.Layout = DashboardLayout
Dashboard.authenticated = true
Dashboard.displayName = 'Dashboard'

export default Dashboard
