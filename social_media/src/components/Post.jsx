import { Favorite, FavoriteBorder, MoreVert, Comment } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar 
              sx={{ width: 30, height: 30 }}
              src="https://media.licdn.com/dms/image/C4D03AQGhAiaw2SDIAQ/profile-displayphoto-shrink_800_800/0/1663955447753?e=1681948800&v=beta&t=s4GWeHR5by6fzjIeINHt9BBDKsL8XFSQDBFF8EJJjWs"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Raghuraj singh"
        subheader="January 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.bhdw.net/im/doll-couple-wallpaper-3497_w635.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;