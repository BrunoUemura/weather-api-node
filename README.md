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
`GET` - `http://localhost:5000/api/v1/weather?city=calgary`
```json
{
  "name": "Calgary",
  "region": "Alberta",
  "country": "Canada",
  "localTime": "2021-12-29 18:49",
  "temperatureInC": -23,
  "temperatureInF": -9.4,
  "feelsLikeInC": -31.3,
  "feelsLikeInF": -24.4,
  "condition": "Partly cloudy",
  "humidity": 70
}
```

## Author
Bruno Hideki Uemura [linkedin](https://www.linkedin.com/in/bruno-uemura/), [Github](https://github.com/BrunoUemura)
