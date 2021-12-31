# Weather API
This Weather API is built with NodeJS + Express

## Setup and Installation
### Install dependencies
```bash
npm install
```

### Run
- Development
```bash
npm run dev
```

- Production
```bash
npm run build
npm start
```

## How it works
Send `GET` request to endpoints bellow:
- Change the city value to retrieve information related to that city.
- The city parameter is required.
- `http://localhost:5000/api/v1/weather?city={CITY_NAME}`

### Example
Method: `GET` \
Endpoint: `http://localhost:5000/api/v1/weather?city=calgary`

```json
{
  "name": "Calgary",
  "region": "Alberta",
  "country": "Canada",
  "localTime": "2021-12-30 19:31",
  "temperatureInC": -21,
  "temperatureInF": -5.8,
  "feelsLikeInC": -26.3,
  "feelsLikeInF": -15.3,
  "condition": "Partly cloudy",
  "humidity": 77,
  "forecast": [
    {
      "date": "2021-12-30",
      "maxTemperatureInC": -16.1,
      "maxTemperatureInF": 3,
      "minTemperatureInC": -23.1,
      "minTemperatureInF": -9.6,
      "avgTemperatureInC": -18.3,
      "avgTemperatureInf": -0.9,
      "condition": {
        "text": "Moderate snow",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/332.png"
      }
    },
    {
      "date": "2021-12-31",
      "maxTemperatureInC": -18.4,
      "maxTemperatureInF": -1.1,
      "minTemperatureInC": -28.1,
      "minTemperatureInF": -18.6,
      "avgTemperatureInC": -24.8,
      "avgTemperatureInf": -12.6,
      "condition": {
        "text": "Freezing fog",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/260.png"
      }
    },
    {
      "date": "2022-01-01",
      "maxTemperatureInC": -8.4,
      "maxTemperatureInF": 16.9,
      "minTemperatureInC": -25.7,
      "minTemperatureInF": -14.3,
      "avgTemperatureInC": -16.4,
      "avgTemperatureInf": 2.5,
      "condition": {
        "text": "Sunny",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
      }
    }
  ]
}
```

## Author
Bruno Hideki Uemura [linkedin](https://www.linkedin.com/in/bruno-uemura/), [Github](https://github.com/BrunoUemura)
