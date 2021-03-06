import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from "react-redux";
import { getAction, saveAction, deleteAction, addAction } from "../../../actions/contentAction";
import {validateInput, existingSubtitle} from '../../../utils/Validations/validateInput'
import Tabs from '../../Utils/Tabs/verticalTabs/verticalTab';
import Tab from '../../Utils/Tabs/selectedTab/selectedTab';
import CKEditor from '../../CKEditor/editor';
import ToastContainer from '../../Utils/Toast/toast';
import CodeMirror from '../../Utils/codeEditor/codeMirror'
import logo from '../../../resources/logoDark.png'
import styles from '../../../styles/adminStyles/adminStyles';


function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3, width: '100%'}}>
            {props.children}
        </Typography>
    );
}


TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            codeUpdate: '',
            textUpdate: '',
            subtitleUpdate: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.handleUpdatedCode = this.handleUpdatedCode.bind(this);
        this.handleUpdatedText = this.handleUpdatedText.bind(this);
        this.isValid = this.isValid.bind(this);
    }


    componentWillMount() {
         this.props.getAction();
    }

    componentDidUpdate(nextProps, nextState) {
        if(JSON.stringify(this.props.content) !== JSON.stringify(nextProps.content)) {
            this.handleChange(null,this.state.value)
        }

    }

    handleChange = (event, value) => {
        this.setState({value});
    };


    isValid(data) {
        let {errors} = validateInput(data);


        if (errors.subtitle) {
            this.setState({
                errors: {subtitle: errors.subtitle}
            });
            return false;
        }

        return true;
    };


    save = (event) => {
        let obj = this.props.content[this.state.value];
        if (this.state.textUpdate || this.state.codeUpdate || this.state.subtitleUpdate) {
            let updatedData = {
                subtitle: (this.state.subtitleUpdate || obj.subtitle).trim(),
                text: this.state.textUpdate || obj.text,
                code: this.state.codeUpdate || obj.code
            };

            //for newly created subtitle and its content
            if(obj.subtitle === '' &&  this.state.subtitleUpdate) {
                if (existingSubtitle(obj, this.props.content, this.state.subtitleUpdate.trim())) {
                    return
                }
            }
            console.log(updatedData);
            if(this.isValid(updatedData)) {
                this.props.saveAction(obj,updatedData);
                this.setState({
                    subtitleUpdate: '',
                    textUpdate: '',
                    codeUpdate: ''

                });

            };
        }

    };





    create = (event) => {

        let {content} = this.props;
        let [last] = [...content].reverse();
        if(last.subtitle !== '') {
            this.props.addAction();
            this.setState((state) => ({
                value: content.length - 1
            }))
        } else
        {
            this.setState({
                value: content.length - 1
            })
        }
    }


    delete = (event) => {

        let obj = this.props.content[this.state.value];
        this.props.deleteAction(obj.subtitle);
        this.setState({
            value: 0
        })

    }


    handleUpdatedCode = (code) => {
        this.setState({
            codeUpdate: code
        })
    };


    handleUpdatedText = (text) => {
        this.setState({
            textUpdate: text
        })
    };


    render() {
        const { value } = this.state;
        const { classes } = this.props;
        const { content } = this.props;
        const tabs = content.map((elem) =>
            <Tab label={elem.subtitle} key={elem.subtitle} className={classes.tabs}/>);


        return (

            <div>
                {content.length > 0 &&
                <div className={classes.dirRow}>

                    <div className={classes.dirColumn}>

                        <div className={classes.gap600}>

                            <img src={logo} alt='' className={classes.img}/>
                            <Tooltip title='Add' placement='left-end'>
                                <Button variant="fab" mini aria-label="Add" onClick={this.create} className={classes.addButton}>
                                    <AddIcon />
                                </Button>
                            </Tooltip>
                        </div>

                        <Tabs value={value} onChange={this.handleChange}>
                            {tabs}
                        </Tabs>

                    </div>
                    {content.map((elem, ix) => {
                        if (value === ix) {
                            return <TabContainer key={ix}>{
                                <div className={classes.contentDirColumn}>

                                    <TextField required
                                               style={{width: '98%'}}
                                               id="standard-required"
                                               label="Subtitle"
                                               helperText={this.state.errors.subtitle ? "Please type subtitle" : ""}
                                               error={this.state.errors.subtitle}
                                               defaultValue={content[ix].subtitle}
                                               margin="normal"
                                               onChange={(event) => {
                                                   this.setState({
                                                       subtitleUpdate: event.target.value
                                                   })
                                               }}/>

                                    <div className={classes.dirColumn}>

                                        <div className={classes.textCode}>

                                            <div className={classes.editorsSizes}>
                                                <CKEditor content={content[ix].text}
                                                          updateTextRef={this.handleUpdatedText}/>
                                            </div>
                                            <div className={classes.CM}>
                                                <CodeMirror code={content[ix].code}
                                                            options={{theme: 'darcula',readOnly:false}}
                                                            updateCodeRef={this.handleUpdatedCode}/>
                                            </div>

                                        </div>
                                        <div className={classes.dirRowReverse}>

                                            <Button variant="contained" onClick={this.delete} className={classes.button}>
                                                <DeleteIcon className={classes.icon}/>
                                                Delete
                                            </Button>

                                            <Button variant="contained" onClick={this.save} className={classes.button}>
                                                <SaveIcon className={classes.icon}/>
                                                Save
                                            </Button>

                                            <ToastContainer/>

                                        </div>

                                    </div>

                                </div>
                            }</TabContainer>
                        }
                        else
                            return null
                    })}
                </div>}
            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,  //from state
    getAction: PropTypes.func.isRequired,
    saveAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired
};

Admin.defaultProps = {
    content: []
}
const styledAdmin = withStyles(styles)(Admin);

export default connect(state => {
        return state }, {getAction, saveAction, deleteAction, addAction}) (styledAdmin);