import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
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


function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      {/*  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Apps sx={{ color: 'primary.main' }}></Apps>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
          <SvgIcon component={TrelloLogo} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }}></SvgIcon>
          <Typography variant='span' sx={{ fontSize: '1.3em', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Workspaces></Workspaces>
          <Recents></Recents>
          <Starred></Starred>
          <Templates></Templates>
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }} />
          <ModeSelect></ModeSelect>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNone sx={{ color: 'primary.main' }}></NotificationsNone>
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutline sx={{ cursor: 'pointer', color: 'primary.main' }}></HelpOutline>
          </Tooltip>

          <Profiles></Profiles>
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
