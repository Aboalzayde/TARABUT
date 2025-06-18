import { useEffect, useRef, useState } from 'react';

export function useCountUpOnView(targetValue, duration = 1500) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const step = Math.ceil(targetValue / (duration / 50));

    const interval = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50);
  }, [hasAnimated, targetValue, duration]);

  return [count, ref];
}
