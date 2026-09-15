import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15, once: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once) obs.unobserve(el);
        } else if (!options.once) {
          setInView(false);
        }
      },
      { threshold: options.threshold, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold, options.once]);

  return [ref, inView];
}
