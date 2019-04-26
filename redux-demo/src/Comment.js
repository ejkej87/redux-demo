    
import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
	<li>
		{text} <span className='votes'>votes: {votes}</span> 
		<div className='buttons'>
			<button onClick={() => thumbUpComment(id)}>Thumb up</button>
			<button onClick={() => thumbDownComment(id)}>Thumb down</button>
			<button onClick={() => removeComment(id)}>Remove comment</button>
			<button onClick={() => {
					let newText = prompt('Edit comment');
					editComment(id, newText)}}>Edit Comment
			</button>
		</div>
	</li>;

export default Comment;