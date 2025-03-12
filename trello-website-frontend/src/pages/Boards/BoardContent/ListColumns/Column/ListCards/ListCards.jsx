import Box from '@mui/material/Box'
import CardItem from './CardItem/CardItem'

function ListCards() {
  return (
    <Box
      sx={{
        p: '5px',
        m: '5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(6)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      {/* Many Card Item */}
      <CardItem></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
      <CardItem temporaryHideMedia></CardItem>
    </Box>
  )
}

export default ListCards
