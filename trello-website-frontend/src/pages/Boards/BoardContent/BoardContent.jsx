import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

function BoardContent( props ) {
  const { board } = props
  const [orderedListColumns, setOrderedListColumns] = useState([])
  // //Nếu sử dụng PointerSensor thì phải kết hợp thuộc tính CSS touch-action: none ở những component kéo thả
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })

  //Yêu cầu con trỏ chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click chuột vẫn kích hoạt event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  //Nhấn giữ 250ms và dung sai cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  })
  //Ưu tiên sử dụng kết hợp 2 loại sensor là mouse và touch để có trải nghiệm trên mobile tốt nhất, tránh xảy ra bug
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderedListColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('Handle Drop End: ', event)
    const { active, over } = event
    //Nếu kéo Component mà biến over == null thì trả về không cần xử lý
    if (!over) return
    if (active.id !== over.id) {
      const currentIndex = orderedListColumns.findIndex(c => c._id === active.id)
      const moveToIndex = orderedListColumns.findIndex(c => c._id === over.id)
      const dndOrderedListColumns = arrayMove(orderedListColumns, currentIndex, moveToIndex)
      // const dndOrderedListColumnsIds = dndOrderedListColumns.map(c => c._id)
      setOrderedListColumns(dndOrderedListColumns)
    }
  }

  return (
    // This is Main Board Content, in Board Content will have many Box Column
    <DndContext onDragEnd={(e) => handleDragEnd(e)} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedListColumns}></ListColumns>
      </Box>
    </DndContext>
  )
}

export default BoardContent
