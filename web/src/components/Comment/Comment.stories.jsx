import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2024-10-21T07:28:00Z',
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
