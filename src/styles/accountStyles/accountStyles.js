const styles = theme => ({

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
    dirRow: {
        display: 'flex',
        flexDirection: 'row'

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