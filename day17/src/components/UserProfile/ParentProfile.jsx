import { useState } from 'react';
import CounterChild from './counterchild';

export default function ParentProfile() {
  const [likes, setLikes] = useState(0);

  const handleIncrement = () => setLikes(prev => prev + 1);
  const handleDecrement = () => setLikes(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <h2>Parent Component </h2>
      <p>The parent component holds the state and passes it down to the child component.</p>

      <CounterChild 
        count={likes}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}