import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const API_URL = API_URL;
  const API_KEY = API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity('');
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      className="SearchBox"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        gap: 1,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            id="city"
            label="Enter City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            sx={{ width: 200 }}
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={<SearchIcon />}
            sx={{ height: '56px', backgroundColor: '#6da0c7ff' }}
          >
            Search
          </Button>
        </Stack>
      </form>

      {error && (
        <Typography
          sx={{
            color: '#ffffffff',
            backgroundColor: '#d90505ff',
            width: '13rem',
          }}
          mt={2}
        >
          No such place exists!
        </Typography>
      )}
    </Box>
  );
}
