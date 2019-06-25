import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/Basepage';

class Blogs extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
            <h1> This is Blogs page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Blogs;