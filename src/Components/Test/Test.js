import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CustomScroll from 'react-customscroll';
import { findDOMNode } from 'react-dom';
import { connect } from "react-redux";
import { getAction } from "../../actions/contentAction";
import CodeMirror from '../Utils/codeEditor/codeMirror';
import styles from '../../styles/testStyles/testStyles';



class Scrolling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            active: null
        };

        this.setScrollTo = this.setScrollTo.bind(this)
    }


    componentWillMount() {
        this.props.getAction()
    }

    setScrollTo(e) {
        e.preventDefault();
        let anchorOffset = findDOMNode(this.refs[e.currentTarget.dataset.anc]).offsetTop;
        let anc = e.currentTarget.dataset.anc;
        this.setState({
            active: anc.slice(3) - 1
        });

        this.refs.scrollWithAnchor.setY(anchorOffset)
    }

    render() {

        const { classes } = this.props;
        const { content } = this.props;
        const titles = content.map((elem, ix) => {
            let anc = 'anc' + (ix +1);
            return <span data-anc={anc} onClick={this.setScrollTo} key={elem.subtitle} className={this.state.active !== ix ?classes.span : classes.selected_span}>{elem.subtitle}</span>;

        })


        return (

            <div>
                {content.length > 0 &&
                <div className={classes.dirRow}>

                        <div className={classes.titlesColumn}>{titles}</div>

                        <div className={classes.rowContent} >

                            <CustomScroll ref="scrollWithAnchor" className={classes.customScroll}>
                                {content.map((elem, ix) => {
                                    let anc = 'anc' + (ix + 1);
                                    return <div ref={anc} className={classes.textCode} key={elem.subtitle}>

                                           <div className={classes.subContent}>
                                               <div className={classes.textss}>
                                                   <h2>{elem.subtitle}</h2>
                                                   <div dangerouslySetInnerHTML={{__html: content[ix].text}}/>
                                               </div>
                                                   <div className={classes.codeMirror}>
                                                       <CodeMirror code={content[ix].code}/>
                                                   </div>
                                           </div>

                                        </div>


                                })}
                            </CustomScroll>
                        </div>}
                </div>}
            </div>
        );
    }
}


Scrolling.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired  //from state
};

Scrolling.defaultProps = {
    content: []
};

const styledScrolling = withStyles(styles)(Scrolling);

export default connect(state => {
    return state }, {getAction}) (styledScrolling);

