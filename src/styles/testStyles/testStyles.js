const styles = theme => ({

    span: {
        '&:hover': {
            color:'#47b0e5',
            cursor: 'pointer'
        },
        background: '#313538',
        width:200,
        wrap: true,
        textAlign: 'center',
        margin: 4,
        color: 'white'
    },
    titlesColumn: {
        display: 'flex',
        flexDirection: 'column',
        background: '#313538'
    },
    contentDirColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '98%'
    },
    textCode: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'flex-between',
        flexWrap: 'wrap'
    },
    text: {
        marginRight:5,
        marginLeft:5,
        background: 'white',
        width: '48%',
        [theme.breakpoints.down('sm')] : {
            width: '100%'
        }
    },
    codem: {
        paddingTop:68,
        marginRight:5,
        marginLeft:5,
        background: 'grey',
        width: '48%',
        [theme.breakpoints.down('sm')] : {
            width: '100%',
            paddingTop:0
        }

    },
   subContent: {
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap'
   },
    dirRow: {
        display: 'flex',
        flexDirection: 'row'

    },
    rowContent: {
        display: 'flex',
        flexDirection: 'row',
        height: 400

    },
    dirColumn: {
        display: 'flex',
        flexDirection: 'column'

    },
    spaceFromTop: {
        width: "265px",
        height: "70px",
        background: '#313538',
        display: 'flex',
        flexDirection: 'row',
    }
})

export default styles;