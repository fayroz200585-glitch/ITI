export default function CounterChild({ count, onIncrement, onDecrement }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h4>Child Component (Counter)</h4>
      <p>Current Value from Parent: <strong>{count}</strong></p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={onIncrement}>Increment +</button>
        <button onClick={onDecrement}>Decrement -</button>
      </div>
    </div>
  );
}