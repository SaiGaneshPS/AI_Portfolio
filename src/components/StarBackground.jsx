// Create a new component for the starry background
import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star properties
    const stars = [];
    const numStars = Math.floor((canvas.width * canvas.height) / 2000); // Responsive star count
    const maxStarSize = 3;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxStarSize,
        speed: Math.random() * 0.4,
        brightness: Math.random(),
        angle: Math.random() * Math.PI * 2
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Update star position
        star.angle += star.speed * 0.01;
        star.y += Math.cos(star.angle) * 0.2;
        
        // Wrap stars around screen
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;

        // Draw star
        const opacity = 0.8 + Math.sin(star.angle) * 0.5;
        ctx.fillStyle = `rgba(139, 247, 205, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default StarBackground;