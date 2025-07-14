import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const HOT_URL =
    'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  const COLD_URL =
    'https://media.istockphoto.com/id/1438178298/photo/beautiful-view-of-the-sunrise-in-the-morning-on-the-country-snowy-road.jpg?s=612x612&w=0&k=20&c=G2o0GvkWgt4cs-Vd2FbXWgfawFhhhcWczvw0VERA7WQ=';
  const RAIN_URL =
    'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg';

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 30
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{' '}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 30 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary' }}
              component={'span'}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                the weather can be described as <i>{info.weather}</i> & Feels
                Like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
