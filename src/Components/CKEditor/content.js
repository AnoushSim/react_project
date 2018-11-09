import React from 'react';
import CKEditor from './Components/CKEditor/editor';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
            updatedText:''
        }
    }

    componentWillMount() {
        let url = 'http://localhost:3003/content';
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then( myJson => {
                this.setState (state => ({
                    content: myJson.body
                }));
            });
    }

    render(){
        return(
            <CKEditor/>
        )
    }

}

export default Content;