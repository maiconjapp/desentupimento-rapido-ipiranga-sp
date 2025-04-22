
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, location }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4 text-3xl text-brand-blue">"</div>
        <p className="text-brand-gray italic">{text}</p>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
