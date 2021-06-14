import { ComponentWithLayout, EmptyObject } from '@/utils'
import { memo, useContext } from 'react'

import { Attention } from '@/styles/color'
import Card from '@/components/card'
import DashboardLayout from '@/layouts/dashboard'
import Icon from '@/components/icon'
import { SessionContext } from '@/contexts/session'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { useUserQuery } from '@/gql'

const User: ComponentWithLayout<EmptyObject> = memo(() => {
  const { login } = useContext(SessionContext)
  const { data } = useUserQuery({ variables: { login } })

  return (
    <>
      {data?.user && (
        <Card>
          <h1>
            {data.user.websiteUrl ? (
              <a href={data.user.websiteUrl} target="_blank" rel="noreferrer">
                {data.user.name}
              </a>
            ) : (
              data.user.name
            )}
          </h1>
          {data.user.company && <p>{data.user.company}</p>}
          <p>
            <Attention>
              <Icon icon={faUserFriends} /> Seguindo{' '}
              {data.user.following.totalCount} &emsp;
              {data.user.followers.totalCount} seguidores
            </Attention>
          </p>
          <p>
            {data.user.bio}
            {/* {data.user.bio?.split(/\r?\n/).map((line, i) => (
              <div key={i}>{line}</div>
            ))} */}
          </p>
        </Card>
      )}
    </>
  )
})
User.Layout = DashboardLayout
User.authenticated = true
User.displayName = 'User'

export default User
