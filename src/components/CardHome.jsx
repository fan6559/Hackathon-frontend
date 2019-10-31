import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button, Container, Row, Col} from "reactstrap";
import '../Css/CardHome.scss'

class CardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://192.168.172.191:8000")
      .then(response => {
        const movies = response.data.movies
        this.setState({ films: movies })

      });
  }
  render() {
    const dash = /_/g;
    return (
      <div className='App'>
      <Container className="mt-3">
        <Row>

        {
          this.state.films.map((film) => {
            return (
              
              <Col lg={3} className="mb-3">
              <Card className ='horror'>
                <CardImg top width="100%" src={film.posterUrl} alt="" />
                <CardBody>
                  <CardText>{film.id}</CardText>
                  <CardTitle>{film.title.replace(dash, ' ')}</CardTitle>
                  <CardText>{film.director.replace(dash, ' ')}</CardText>
                  <CardSubtitle>{film.country.replace(dash, ' ')}</CardSubtitle>
                  <CardText>{film.year}</CardText>
                </CardBody>
              </Card>
              </Col>
            )
          })
        }
        </Row>
      </Container>
      </div>
    )
  }

}

export default CardHome