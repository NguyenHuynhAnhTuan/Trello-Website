import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import Apps from '@mui/icons-material/Apps'
import SvgIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'

import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import Workspaces from '~/components/AppBar/Menus/Workspaces'
import Recents from '~/components/AppBar/Menus/Recents'
import Starred from '~/components/AppBar/Menus/Starred'
import Templates from '~/components/AppBar/Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Profiles from '~/components/AppBar/Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'


function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      {/*  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Website Name and Logo */}
        <Apps sx={{ color: 'white' }}></Apps>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
          <SvgIcon component={TrelloLogo} inheritViewBox fontSize='small' sx={{ color: 'white' }}></SvgIcon>
          <Typography variant='span' sx={{ fontSize: '1.3em', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
        </Box>

        {/* Left Side */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Workspaces></Workspaces>
          <Recents></Recents>
          <Starred></Starred>
          <Templates></Templates>
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover':{
                border: 'none'
              }
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}>Create</Button>
        </Box>
      </Box>

      {/* Rigth Side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            size='small'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize='small'
                  sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')} />
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '170px',
              '& label': {
                color: 'white'
              },
              '& input': {
                color: 'white'
              },
              '& label.Mui-focused': {
                color: 'white'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }} ></TextField>

          <ModeSelect></ModeSelect>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Tooltip title="Notifications">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNone sx={{ color: 'white' }}></NotificationsNone>
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutline sx={{ cursor: 'pointer', color: 'white' }}></HelpOutline>
          </Tooltip>

          <Profiles></Profiles>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
