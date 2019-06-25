import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponet extends React.Component {
    
    constructor(props) {
        
        super(props);
       
        this.someVariable = 'just some variable';
    }

    alartName(title) {
        alert(title);
    }
    render() {
        return (
            <BaseLayout>
                <h1> This is Blogs page</h1>
            </BaseLayout>
        )
    }
}

export default SuperComponet;