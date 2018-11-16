import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CustomScroll from 'react-customscroll';
import { findDOMNode } from 'react-dom';
import CodeMirror from '../Utils/codeEditor/codeMirror';
import styles from '../../styles/testStyles/testStyles';



class Scrolling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        };

        this.setScrollTo = this.setScrollTo.bind(this)
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

    setScrollTo(e) {
        e.preventDefault();
        let anchorOffset = findDOMNode(this.refs[e.currentTarget.dataset.anc]).offsetTop;
        this.refs.scrollWithAnchor.setY(anchorOffset);
    }

    render() {

        const {classes} = this.props;
        const {content} = this.state;

        const titles = content.map((elem, ix) => {
            let anc = 'anc' + (ix +1);
            return <span data-anc={anc} onClick={this.setScrollTo} key={elem.subtitle} className={classes.span}>{elem.subtitle}</span>;

        })


        return (

            <div>
                {content.length > 0 &&
                <div className={classes.dirRow}>

                        <div className={classes.titlesColumn}>{titles}</div>

                        <div className={classes.rowContent} >

                            <CustomScroll ref="scrollWithAnchor">
                                {content.map((elem, ix) => {
                                    let anc = 'anc' + (ix + 1);
                                    return <div ref={anc} className={classes.textCode} key={elem.subtitle}>

                                           <div className={classes.subContent}>
                                               <div className={classes.text}>
                                                   <h2>{elem.subtitle}</h2>
                                                   <div dangerouslySetInnerHTML={{__html: content[ix].text}}></div>
                                               </div>
                                               <div className={classes.codem}>
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
};

export default withStyles(styles)(Scrolling);


