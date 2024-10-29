import React, { useState, useEffect } from 'react';

const ThrottlePage: React.FC = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [throttledScrollCount, setThrottledScrollCount] = useState(0);
  const [isThrottling, setIsThrottling] = useState(false);

  const handleScroll = () => {
    // Increment the scroll count without throttling
    setScrollCount((prevCount) => prevCount + 1);

    if (!isThrottling) {
      setThrottledScrollCount((prevCount) => prevCount + 1);
      setIsThrottling(true);

      setTimeout(() => {
        setIsThrottling(false);
      }, 1000); // throttle to 1 call per second

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isThrottling]);

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'white', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h2>Throttle Demo</h2>
        <p>Scroll down to see the scroll event counts:</p>
        <h3>Throttled Scroll Count: {throttledScrollCount}</h3>
        <h3>Non-Throttled Scroll Count: {scrollCount}</h3>
      </div>
      <div style={{ height: '5000vh', paddingTop: '100px' }}>
        Scroll to increase the counters.
      </div>
    </div>
  );
}

export default ThrottlePage;
