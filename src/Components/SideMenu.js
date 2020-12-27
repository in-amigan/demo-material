import { withStyles } from '@material-ui/core'

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
        
    }
}

//const sideMenu = ( {classes} ) => (
//            <div className= {classes.sideMenu}>
//            </div>
//)

//export SideMenu = withStyles(style)(sideMenu())

const SideMenu = ( { classes } ) => (
  <div className={classes.sideMenu}>Foo</div>
)

export default withStyles( style )( SideMenu )
