import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item1 is from feedback context',
      rating: 7
    },
    {
      id: 2,
      text: 'This item2 is from feedback context',
      rating: 8
    },
    {
      id: 3,
      text: 'This item3 is from feedback context',
      rating: 9
    },
  ]);


  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })


  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback])
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)))
  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;