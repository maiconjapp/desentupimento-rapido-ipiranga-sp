
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, location }) => {
  return (
    <Card className="h-full flex flex-col bg-gray-800 border-gray-700">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4 text-3xl text-brand-orange">"</div>
        <p className="text-gray-300 italic">{text}</p>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-gray-300">{location}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
