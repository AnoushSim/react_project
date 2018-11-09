import React, { Component } from 'react';
import CKEditor from 'react-ckeditor-component';
import PropTypes from 'prop-types';




const options = {
    toolbar: 'full',
    language: 'en',
    uiColor: '#157fb6',
    width: '700px',
    height: '990px',
    toolbar_full: [
        {
            name: 'basicstyles',
            items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
        },
        {name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
        {name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt']},
        {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
        {name: 'document', items: ['Source', '-', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates']},
        {name: 'tools', items: ['Maximize']},
        '/',
        {name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']},
        {
            name: 'paragraph',
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
        },
        {
            name: 'insert',
            items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe']
        }
    ]
}

class Editor extends Component {
    constructor(props) {
        super(props);


        this.state = {
            content: '',
        };

        this.onChange = this.onChange.bind(this);
        this.updateContent = this.updateContent.bind(this)
    }

    componentWillMount(){
        this.updateContent(this.props.content);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.content !== nextProps.content)
            this.updateContent(nextProps.content);
    }

    updateContent(content) {
        this.setState({
            content: content
        })
    }

    onChange(evt){
        let content = this.state.content;

        if(evt.name === 'change'){
            const newText = evt.editor.getData();
            content = newText;
        }

        this.setState({
            content: content
        })
        this.props.updateTextRef(this.state.content);
    }

    render() {
        const {content} = this.state;


        return (
            <CKEditor
                activeClass=""
                config={options}
                content={content}
                events={{
                    "change": this.onChange
                }}
            />
        )
    }

}

Editor.Props = {
    content: PropTypes.object.isRequired,
    updateTextRef: PropTypes.func
}

Editor.defaultProps={
    content:''
};


export default  Editor;