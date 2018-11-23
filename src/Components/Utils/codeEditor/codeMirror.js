import React from 'react';
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import  'codemirror/theme/darcula.css';
import '../../../styles/codeMirror.css'


class codeEditor extends React.Component{

    constructor(props){
        super(props);

        this.state =  {
            code: ''
        };

        this.update = this.update.bind(this);

    }
    componentWillMount(){
        this.setState({
            code: this.props.code
        });
    };

    update = (event) => {
        this.setState({
            code: event
        })

        this.props.updateCodeRef(this.state.code);
    };

    render(){
        let {options} = this.props;
        return(
            <CodeMirror value={this.state.code} onChange={this.update} options = {options} />
        )
    }


};

codeEditor.propTypes = {
    options: PropTypes.object.isRequired,
    code: PropTypes.string.isRequired,
    updateCodeRef: PropTypes.func
};

codeEditor.defaultProps = {
    code: 'var y \nvar x',
    options:  { theme: 'darcula', readOnly: 'nocursor'}
};

export default codeEditor;