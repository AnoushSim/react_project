import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tabs from '../../Utils/Tabs/verticalTabs/verticalTab';
import Tab from '../../Utils/Tabs/selectedTab/selectedTab';
import CodeMirror from '../../Utils/codeEditor/codeMirror';
import styles from '../../../styles/accountStyles/accountStyles';


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


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            content: []
        };

        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount() {
        let url = 'http://localhost:3003/content';
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                if (myJson) {
                    this.setState(state => ({
                        content: myJson.body
                    }));
                }
            });
    }

    handleChange = (event, value) => {
        this.setState({value});
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
                <div className={classes.dirRow}>

                    <div className={classes.dirColumn}>

                        <div className={classes.spaceFromTop}>
                        </div>

                        <Tabs value={value} onChange={this.handleChange}>
                            {tabs}
                        </Tabs>

                    </div>
                    {content.map((elem, ix) => {
                        if (value === ix) {
                            return <TabContainer key={ix}>{
                                <div className={classes.contentDirColumn}>


                                    <h2>{content[ix].subtitle}</h2>

                                    <div className={classes.dirColumn}>

                                        <div className={classes.textCode}>

                                            <div className={classes.editorsSizes}>
                                                <div dangerouslySetInnerHTML={{__html: content[ix].text}}></div>
                                            </div>
                                            <div className={classes.editorsSizes}>
                                                <CodeMirror code={content[ix].code}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            }</TabContainer>
                        }
                    })}
                </div>}
            </div>
        );
    }
}

Account.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);