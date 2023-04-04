import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PropType {
  thumbnail: string;
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
}

const CardContainer = ({
  thumbnail,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
}: PropType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={thumbnail} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {subtitle1 ? (
          <Typography variant="subtitle1">{subtitle1}</Typography>
        ) : null}
        {subtitle2 ? (
          <Typography variant="subtitle2" color="#8D8D8D">
            {subtitle2}
          </Typography>
        ) : null}
        {subtitle3 ? (
          <Typography variant="subtitle1">{subtitle3}</Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CardContainer;
