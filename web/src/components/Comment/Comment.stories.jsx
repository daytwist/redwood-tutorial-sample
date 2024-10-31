import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2024-10-21T07:28:00Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    roles: 'moderator',
  })

  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2024-10-21T07:28:00Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
