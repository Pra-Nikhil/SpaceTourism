

import { useEffect, useState } from "react";

export default function FallingStar() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 4 + 4;
      const size = Math.random() * 1 + 1; 

      const newStar = {
        id,
        left: startX,
        size,
        duration,
      };

      setStars((prevStars) => [...prevStars, newStar]);

      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== id));
      }, duration * 1000);
    };

    const interval = setInterval(createStar, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className=" absolute w-full h-screen bg-transparent overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className=" absolute bg-white shadow-[5px_0_5px_10px_(#111111)] rounded-full"
          style={{
            left: `${star.left}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `fall ${star.duration}s linear forwards`,
          }}
        />
      ))}

      
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0) translateX(-40vw);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) translateX(80vw);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

