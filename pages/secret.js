import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';

import withAuth from '../components/hoc/withAuth';
import { getSecretData, getSecretDataServer } from '../actions/index';

class Secret extends React.Component {

    static async getInitialProps({req}) {
        const anotherSecretData = await getSecretData(req);
        
        //  1.const anotherSecretData = process.browser ? await getSecretData() : await getSecretDataServer(req) ;

        // console.log(anotherSecretData);

        return { anotherSecretData };
    }

    // constructor(props) {
    //     super();

    //     this.state = {
    //         secretData: []
    //     }
    // }

    state = {
        secretData:[]
    }

    async componentDidMount() {
        const secretData = await getSecretData();
         
        // debugger;
        this.setState({
            secretData
        });
    }

    displaySecretData() {
        const { secretData } = this.state;
        // debugger;
        
        if (secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <p> {data.title} </p>
                        <p> {data.description} </p>
                    </div>
                )
            })
        }
        return null;
    }

    render() {     
        const { superSecretValue } = this.props;
        // debugger;
        // console.log(this.state);
        return (
        <BaseLayout {...this.props.auth}>
            <BasePage>
                    <h1> This is Secret page</h1>
                    <h2>{superSecretValue} </h2>
                    {this.displaySecretData() }
                </BasePage>
            </BaseLayout>
        )
    }
}
            
export default withAuth()(Secret);