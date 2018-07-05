import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList({ comments = [], isOpen, toggleOpen }) {
  const text = isOpen ? 'Hide comments': 'Show comments'

  return (
    <div>
      <button type="button" onClick = {toggleOpen}>
        { text }
      </button>
      {getBody({comments, isOpen})}
    </div>
  )
}

function getBody({comments, isOpen}) {
  if (!isOpen) return null

  if (!comments.length) return <p>No comments yet!</p>
  return (
    <ul>
      {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)}
    </ul>
  )
}

export default toggleOpen(CommentList)