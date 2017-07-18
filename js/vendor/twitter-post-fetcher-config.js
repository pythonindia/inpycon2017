/*Twitter Post Fetcher config*/

var configProfile = {
  "profile": {"screenName": 'pyconindia'},
  "domId": 'pyconindia-tweets',
  "maxTweets": 5,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);

