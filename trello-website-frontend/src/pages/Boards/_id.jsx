// Board Details
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      {/* AppBar Component */}
      <AppBar></AppBar>

      {/* BoardBar Component */}
      <BoardBar board={mockData?.board} ></BoardBar>

      {/* Board Content Component */}
      <BoardContent board={mockData?.board} ></BoardContent>
    </Container>
  )
}

export default Board
