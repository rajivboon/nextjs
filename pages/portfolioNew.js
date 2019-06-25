
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Container, Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends React.Component {

    constructor(props) {
        super();

        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData) {
        alert(JSON.stringify(portfolioData, null, 2));
    }

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Create New PortfolioNew " className="portfolio-create-page" >
                  
                        <Row>
                        <Col xs="6">
                            <PortfolioCreateForm onSubmit={this.savePortfolio} />
                        </Col>
                            
                        </Row>                 

                   
                </BasePage>
            </BaseLayout>

        )
    }
}  

export default withAuth('siteOwner') (PortfolioNew);