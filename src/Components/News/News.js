import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const News = (props) => {
    const {title, description, urlToImage} = props.article
    return (
        <Container >
           
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </Container>
    );
};

export default News;