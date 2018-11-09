import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import { toast } from 'react-toastify';
import Tabs from './Components/Tabs/verticalTabs/verticalTab';
import Tab from './Components/Tabs/selectedTab/selectedTab';
import CKEditor from './Components/CKEditor/editor';
import CodeMirror from './Components/codeEditor/codeEditor'
import logo from './resources/logoDark.png'
import styles from './styles/Tabs/tabsStyles';


function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}


TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class SimpleTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            content: [],
            codeUpdate:'',
            textUpdate: '',
            subtitleUpdate:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        //this.handleUpdated = this.handleUpdated.bind(this);
        this.handleUpdatedCode = this.handleUpdatedCode.bind(this);
        this.handleUpdatedText = this.handleUpdatedText.bind(this);
    }


    componentWillMount() {
        let url = 'http://localhost:3003/content';
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                if(myJson) {
                    this.setState(state => ({
                        content: myJson.body
                    }));
                }
            });
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    save = (event) => {
        let obj = this.state.content[this.state.value];
        if(this.state.textUpdate || this.state.codeUpdate) {
            let url = 'http://localhost:3003/';
            let updatedData = {
                 subtitle: this.state.subtitleUpdate || obj.subtitle,
                 text: this.state.textUpdate || obj.text,
                 code: this.state.codeUpdate || obj.code
            };
            let req = {
                url: url,
                method: 'PUT',
                data: updatedData
            }
            axios(req)
                .then(res => {
                    console.log(1);
                    if (res.success)
                        toast.success('Updated!');
                    else
                        toast.error(res.message || 'Cannot update.');

                });
        }
        this.setState({
            subtitleUpdate: '',
            textUpdate: '',
            codeUpdate: ''
        })

    }

    handleUpdatedCode = (code) => {
        this.setState (state => ({
                codeUpdate: code
            }))
    };


    handleUpdatedText = (text) => {
        this.setState ({
                textUpdate: text
            })
    };


    render() {

        const {value} = this.state;
        const {classes} = this.props;
        const {content} = this.state;

        const tabs = content.map((elem) =>
            <Tab label={elem.subtitle} key={elem.subtitle}/>);


        return (

            <div>
                {content.length > 0 &&
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div className={classes.div}>
                            <img src={logo} alt='' className={classes.img}/>
                        </div>
                        <Tabs value={value} onChange={this.handleChange}>
                            {tabs}
                        </Tabs>
                    </div>
                    {content.map((elem, ix) => {
                        if (value === ix) {
                            return <TabContainer key={ix}>{
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <CKEditor content={content[ix].text}
                                              updateTextRef={this.handleUpdatedText}/>
                                    <CodeMirror code={content[ix].code}
                                                updateCodeRef={this.handleUpdatedCode}/>
                                </div>
                            }</TabContainer>
                        }
                    })}
                </div>}
                <Button variant="contained" onClick={this.save} className={classes.button} >
                   <SaveIcon className={classes.icon} />
                    Save
                </Button>
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);



