```
GET /api/schedule.json
```

```
{
  "0.0.1": [
    {
      "tracks": ["Audi 1", "Audi 2", "Audi 3"],
      "2017-03-18": [
        {
          "talk_id": "00",
          "title": "Registration",
          "start_time": "08:00",
          "end_time": "09:00",
          "track": "all"
        },
        {
          "talk_id": "01",
          "title": "Introductions & Opening Ceremony",
          "start_time": "09:00",
          "end_time": "09:30",
          "track": "all"
        }]
    }]
}
```

```
GET /api/event.json
```
```
{
  "0.0.1":[{
  "name": "Event Name Here",
  "venue": "Venue Name here",
  "start_date": "2017-03-18T8:00:00Z",
  "end_date": "2017-03-19T18:00:00Z",
  "venue_partners": [{
      "name": "Venue Details",
      "about": "About venue",
      "url": "http://externalurltovenue.org"
    }]
  }]
}
```

```
GET /api/sponsors.json
```
```
{
  "0.0.1": [
    {
      "name": "Sponsor Name",
      "type": "Platinum/Gold/Silver",
      "website": "http://sponsor_url",
      "logo": "http://sponsor_logo.jpg",
      "about": "details of sponsor"
    },
    {
      "name": "Sponsor Name",
      "type": "Platinum/Gold/Silver",
      "website": "http://sponsor_url",
      "logo": "http://sponsor_logo.jpg",
      "about": "details of sponsor"
    }
  ]
}
```
