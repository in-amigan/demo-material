import React from 'react'
import { AppBar, Toolbar, withStyles, Grid } from '@material-ui/core' 
import MenuIcon from '@material-ui/icons/Menu'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'


const style = {
    header: {
        paddingLeft: '320px',
        width: '100%'
    }
}

const Header = ( { classes } ) => (
    <div className={classes.header}>
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <MenuIcon/>
                    </Grid>
                    <Grid item sm/>
                    <Grid item>
                        <PermIdentityIcon/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
     </div>
)

export default withStyles( style )( Header )
