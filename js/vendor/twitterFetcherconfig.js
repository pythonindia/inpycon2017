
/**************************************************************************
 * NEW: These first examples no longer need the Widget ID to work.
 *************************************************************************/


var configProfile = {
  "profile": {"screenName": 'pyconindia'},
  "domId": 'pyconindiaTweets',
  "maxTweets": 5,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);

