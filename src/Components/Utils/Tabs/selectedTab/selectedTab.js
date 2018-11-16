import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const MyTab = withStyles(theme => ({
    root: {
        '&:hover': {
            color:'#47b0e5'
        },
        wrap:true
    },
    selected: {
        background: 'linear-gradient(180deg, #0170a5 20%, #1ecbd9 100%)',
        borderBottom: '2px solid #3ba5db',
        wrap:true
    }
}))(Tab);

export default MyTab;