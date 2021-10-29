# raining cats
A Weather lookup app using the OpenWeather API.


### Description
Weather Lookup that displays the weather of a city of choice (search) in either metric or imperial format (interchangeble). 

### Technologies and libraries
React, Axios, Bootstrap (+ React-Bootstrap)

### Feautures
* Retrieves weather data from OpenWeather API.
* Search by city, and select preffered unit (metric/imperial).
* Switch between units once search result is displayed.
* Resault card border changes according to weather type.
* An update query is sent on 10 second intervals once search result is displayed.
* Last search result is redisplayed after refresh (but is removed if app is closed).
* Error message displayed for invalid search/invalid update.
* 3 Last searched cities are displayed in the history section.
* History items are clickable, the user can once again switch between units, and an update query is sent every 10 seconds.
* Mobile compatible.


### Known Issues
* Submit by Enter fails to send form data.


### TODOs and more features
* (Submit by Enter).
* Testing
* Autocomplete for search.
* Atm only styled for mobile.



### Preview
![alt text](https://github.com/MichalFrontEnd/rainingcats/blob/main/public/demo.gif "rainingcats preview Gif")
