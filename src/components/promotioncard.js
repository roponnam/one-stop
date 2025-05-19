import React from 'react';
import { Card } from 'react-bootstrap';

const PromotionCard = ({ promotion }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="text-primary">{promotion.title}</Card.Title>
        <Card.Text>{promotion.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PromotionCard;