import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function Album() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the photos!", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Photo Album</h2>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {photos.slice(0, 20).map((photo) => (
            <Col key={photo.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Album;
