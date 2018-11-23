const styles = theme => ({

    span: {
        '&:hover': {
            color:'#6A8759',
            cursor: 'pointer'
        },
        background: '#313538',
        wrap: true,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 4,
        color: 'white'
    },
    selected_span: {
        '&:hover': {
            color:'#6897BB',
            cursor: 'pointer'
        },
        background: '#313538',
        wrap: true,
        fontWeight: 'bold',
        textAlign: 'left',
        margin: 4,
        color: '#6897BB'
    },
    titlesColumn: {
        display: 'flex',
        flexDirection: 'column',
        background: '#313538',
        height: 900,
        width:'15%'
    },
    contentDirColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    textCode: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'flex-between',
        flexWrap: 'wrap',
        borderBottom: 'solid #2b2b2b 1px'
    },
    textss: {
        marginRight:5,
        marginLeft:5,
        background: '#edf1fc',
        width: '50%',
        [theme.breakpoints.down('md')] : {
            width: '85%'
        }
    },
    codeMirror: {
        paddingTop:70,
        background: '#474f52',
        width: '49%',
        [theme.breakpoints.down('md')] : {
            width: '85%',
            paddingTop:0
        }

    },
    customScroll: {
       overflow: 'hidden',
        width: '100%',
        position: 'relative'
    },
   subContent: {
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap',
       width:'100%'
   },
    dirRow: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%'

    },
    rowContent: {
        display: 'flex',
        flexDirection: 'row',
        height: 900,
        width: '85%',
        background:'#edf1fc'

    },
    dirColumn: {
        display: 'flex',
        flexDirection: 'column'

    }
})

export default styles;