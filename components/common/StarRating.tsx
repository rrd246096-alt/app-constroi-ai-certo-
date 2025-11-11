
import React from 'react';
import { StarIcon } from './Icons';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              starValue <= rating ? 'text-amber-400' : 'text-slate-500'
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
