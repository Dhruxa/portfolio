import  { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<{id: number, left: string, top: string, duration: number}[]>([]);

  useEffect(() => {
    // Create regular stars
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 2,
      delay: Math.random() * 5
    }));
    
    setStars(generatedStars);
    
    // Generate shooting stars periodically
    const interval = setInterval(() => {
      const newShootingStar = {
        id: Math.random(),
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 30}%`,
        duration: Math.random() * 3 + 2
      };
      
      setShootingStars(prev => [...prev, newShootingStar]);
      
      // Remove shooting star after animation
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, newShootingStar.duration * 1000);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-20 h-px bg-white animate-shooting-star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
}
  