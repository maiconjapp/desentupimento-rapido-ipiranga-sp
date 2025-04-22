
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, location }) => {
  return (
    <Card className="h-full flex flex-col bg-white border-gray-200">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4 text-3xl text-brand-orange">"</div>
        <p className="text-gray-800 italic">{text}</p>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <p className="font-semibold text-black">{author}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
