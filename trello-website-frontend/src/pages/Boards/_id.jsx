// Board Details
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      {/* AppBar Component */}
      <AppBar></AppBar>

      {/* BoardBar Component */}
      <BoardBar></BoardBar>

      {/* Board Content Component */}
      <BoardContent></BoardContent>
    </Container>
  )
}

export default Board
