const styles = theme => ({

    img: {
        marginTop: '5px',
        width: "150px",
        height: "50px",
        background: '#313538'
    },
    dirColumn: {
        display: 'flex',
        flexDirection: 'column'
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
    editorsSizes: {
      margin: '10px',
      width: '48%',
      [theme.breakpoints.down('md')] : {
          width: '100%'
      }
    },
    CM: {
        margin: '10px',
        height: 440,
        overflow: 'scroll',
        background: '#2b2b2b',
        width: '48%',
        [theme.breakpoints.down('md')] : {
            width: '100%'
        }
    },
    dirRow: {
        display: 'flex',
        flexDirection: 'row'

    },
    dirRowReverse: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row-reverse'

    },
    icon: {
        margin:4
    },
    button: {
        margin: '10px',
        size: 'medium',
        background: 'linear-gradient(180deg, #0170a5 20%, #1ecbd9 100%)'
    },
    addButton: {
        marginLeft: 60,
        marginTop: 10,
        background: 'linear-gradient(180deg, #0170a5 20%, #1ecbd9 100%)'
    },
    gap600: {
        width: "265px",
        height: "70px",
        background: '#313538',
        display: 'flex',
        flexDirection: 'row',
    },
    tabs: {
        textTransform: 'none',
        fontSize: 16
    }
})

export default styles;
