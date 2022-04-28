import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a react app utilizing react and react router to create a feedback survey</p>
      </div>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>

  )
}

export default AboutPage
