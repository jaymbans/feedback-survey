import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeebackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])


  const handleTextChange = ({ target }) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Your Review must be longer than 10 characters')
    } else {
      setMessage('')
      setBtnDisabled(false);
    }

    setText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder='Write a Review'
            id="" value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Submit Review</Button>

          {message && <div className='message'>{message}</div>}
        </div>
      </form>
    </Card>
  )
}

export default FeebackForm
