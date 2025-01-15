```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: no infinite loop
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```