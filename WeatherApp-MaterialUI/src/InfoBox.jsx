import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const HOT_URL =
    'https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  const COLD_URL =
    'https://media.istockphoto.com/id/1438178298/photo/beautiful-view-of-the-sunrise-in-the-morning-on-the-country-snowy-road.jpg?s=612x612&w=0&k=20&c=G2o0GvkWgt4cs-Vd2FbXWgfawFhhhcWczvw0VERA7WQ=';
  const RAIN_URL =
    'https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg';

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon sx={{ color: '#4c6a78ff' }} />;
    if (info.temp > 30) return <WbSunnyIcon sx={{ color: '#fdb446ff' }} />;
    return <AcUnitIcon sx={{ color: '#79b2cdff' }} />;
  };

  const backgroundImg =
    info.humidity > 80 ? RAIN_URL : info.temp > 30 ? HOT_URL : COLD_URL;

  return (
    <Box className="InfoBox" sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Card
        sx={{
          width: 350,
          borderRadius: 2,
          boxShadow: 6,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={backgroundImg}
          alt="Weather"
        />
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5" fontWeight="bold">
              {info.city}
            </Typography>
            {getWeatherIcon()}
          </Stack>

          <Box mt={2} sx={{ color: '#5e5e5fff' }} textAlign={'left'}>
            <Typography variant="body1">
              🌡️ Temperature: {info.temp}&deg;C
            </Typography>
            <Typography variant="body1">
              💧 Humidity: {info.humidity}%
            </Typography>
            <Typography variant="body1">
              🔻 Min Temp: {info.tempMin}&deg;C
            </Typography>
            <Typography variant="body1">
              🔺 Max Temp: {info.tempMax}&deg;C
            </Typography>
            <Typography variant="body1" mt={1}>
              <i>{info.weather}</i> — Feels Like: {info.feelsLike}&deg;C
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
