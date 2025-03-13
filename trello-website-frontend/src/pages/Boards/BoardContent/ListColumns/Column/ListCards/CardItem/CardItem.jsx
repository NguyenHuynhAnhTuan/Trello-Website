import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function CardItem( props ) {
  const { cardData } = props
  const shouldShowCardAction = () => {
    return !!cardData?.memberIds.length || !!cardData?.comments.length || !!cardData?.attachments.length
  }

  return (
    <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }} >
      {cardData?.cover && <CardMedia sx={{ height: 140 }} image={cardData?.cover} />}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{cardData?.title}</Typography>
      </CardContent>
      {
        shouldShowCardAction() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!cardData?.memberIds.length && <Button size="small" startIcon={<GroupIcon />}>{cardData?.memberIds.length}</Button>}
          {!!cardData?.comments.length && <Button size="small" startIcon={<CommentIcon />}>{cardData?.comments.length}</Button>}
          {!!cardData?.attachments.length && <Button size="small" startIcon={<AttachmentIcon />}>{cardData?.attachments.length}</Button>}
        </CardActions>
      }
    </Card>
  )
}


export default CardItem
