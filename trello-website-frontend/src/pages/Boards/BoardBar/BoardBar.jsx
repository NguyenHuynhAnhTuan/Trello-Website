import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      {/* Left Side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Trello Board"
          // clickable
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          // clickable
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          // clickable
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick={() => {}}
        />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          // clickable
          onClick={() => {}}
        />
      </Box>

      {/* Right Side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            border: '1px solid white',
            '&:hover':{
              borderWidth: '2px',
              borderColor: 'white'
            }
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}>Invite</Button>

        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                backgroundColor: '#a4b0de'
              }
            }
          }}
        >
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
          <Tooltip title="tuannguyencoder">
            <Avatar
              alt="tuannguyencoder"
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
