import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes'
import BasePage from '../components/Basepage';
import {
    Card, CardText, CardBody, CardHeader,
    CardTitle, Row, Col,
} from 'reactstrap';


class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts= [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch (error) {
            console.error(error);
        }       
        return { posts: posts.splice(0, 10)};
    }
    
    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <Col md="4">
                    <React.Fragment key={index}>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city"> Some Location {index} </p>
                                    <CardTitle className="portfolio-card-title"> {index}. Some Profile </CardTitle>
                                    <CardText className="portfolio-card-text">Some Description {index}</CardText>
                                    <div className="readMore"> </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
                </Col>

            )
        })
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Profiles">
                <Row>
                    {this.renderPosts(posts)}
                    {/* {posts.map((post) => {
                        return (
                            <li>{post.title} </li>
                            )
                        })} */}
            </Row>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;