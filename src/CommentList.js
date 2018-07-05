import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  state = {
    isOpen: false
  }

  render() {
    const text = !this.state.isOpen ? 'Open Comment': 'Close Comment'

    return (
      <div>
        <button type="button" onClick = {this.toggleOpen}>
          { text }
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null
    const {comments} = this.props
    if (!comments || !comments.length) return <p>No comments yet!</p>
    return (
      <ul>
        {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)}
      </ul>
    )
  }

  toggleOpen = ev => this.setState({
    isOpen: !this.state.isOpen
  })
}

export default CommentList