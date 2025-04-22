
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4 text-brand-blue">
          {icon}
        </div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center text-brand-gray">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center pt-4">
        <Button asChild>
          <Link to={link}>Saiba mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
