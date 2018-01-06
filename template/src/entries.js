import React from 'react'

const entries = [
  {
    path: '/top_level_item/post',
    title: 'My Sweet Post',
    date: 'Jan 1 2017',
    disqusId: '',
    description: (
      <div>
        <p>
          Here is my sweet post description!
          <img src="https://media2.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif" alt="sweet gif" />
        </p>
      </div>
    ),
    descriptionPlainText: 'This content will be used for content in share links like Email, Twitter and Facebook.',
    content: (
      <div>
        <p>This is my sweet post content!</p>
      </div>
    ),
    type: 'article',
  },
  {
    path: '/minimal/post',
    title: 'My Sweet Post',
    date: 'Jan 3 2017',
    description: 'Non-structured description',
    content: 'Simple content',
  },
  {
    path: '/minimal/other_post',
    title: 'My Other Sweet Post',
    date: 'Jan 1 2017',
    description: 'Another non-structured description',
    content: 'Simple content',
  },
  {
    path: '/non_nested_post',
    title: 'Non-nested post',
    content: "This content won't show up in the summary since it doesn't have a date.",
  },
]

export default entries
