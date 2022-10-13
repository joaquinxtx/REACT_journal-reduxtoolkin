import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Sidebar } from '../components/Sidebar';

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex' }}>
        <NavBar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth}/>
        {/* SideBar */}
        <Box 
        component='main'
        sx={{flexGrow:1,p:3}}>
            {/* ToolBar */}
            <Toolbar/>

            {children}

        </Box>
    </Box>
  )
}
