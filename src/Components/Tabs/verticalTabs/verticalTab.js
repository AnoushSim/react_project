import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const VerticalTabs = withStyles(theme => ({
    flexContainer: {
        flexDirection: 'column'
    },
    indicator: {
        display: 'none',
    },
    root: {
        background: '#313538',
        color: 'white',
        width: '265px',
        height: '1000px',
        wrap: true,

    }

}))(Tabs);

export default VerticalTabs;