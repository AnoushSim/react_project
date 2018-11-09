import React from 'react';
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import  'codemirror/theme/night.css'
//import Editor from "../CKEditor/editor";


class codeEditor extends React.Component{

    constructor(props){
        super(props);

        this.state =  {
            code: 'var a = 12;\nvar b = 13;'
        };

        this.updateContent = this.updateContent.bind(this);

    }

    componentWillMount(){
        this.updateContent(this.props.content);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.content !== nextProps.content)
            this.updateContent(nextProps.content);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.state.content)
    }

    updateContent(event) {
        this.setState({
            code: event
        })
    }

    /*update = (event) => {
        this.setState({
            code: event
        })
    };*/

    render(){
        let options = {

            theme: 'night',
            //readOnly: 'nocursor',

        }
        return(
            <CodeMirror value={this.state.code} onChange={this.update} options = {options} />
        )
    }


};

codeEditor.Props = {
    code: PropTypes.object.isRequired,
}

codeEditor.defaultProps={
    code:''
};

export default codeEditor;