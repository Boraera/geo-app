"# geo-app" 
# Geo face mobile application  

This is a basic source code  for the Geo face mobile app

Used technologies:
([MongoDB](https://www.mongodb.org/), 
[AngularJS](https://angularjs.org/)
[Node.js](https://nodejs.org),
[IBM Bluemix](http://bluemix.net),
[Ionic Framework](http://ionicframework.com/)
)

This application uses the 
[JSON Server](https://github.com/typicode/json-server) at the moment
and is capable to connect later to (planned features): 
- [MongoDB experimental service](https://www.ng.bluemix.net/docs/#services/MongoDB/index.html#MongoDB) 
-[Cloudant NoSQL database-as-a-service (DBaaS)](https://cloudant.com/)

#### Features
- visualisation possibility of the latest GEO events
- impressive and condensed page about GEO displayed on a well visible place of the web-app
- visualisation possibility of the latest GEO music collections on the web site
- impressive and condensed page about GEO displayed on a well visible place of the web-app

## Application Requirements
- [Node.js & NPM](https://nodejs.org/en/download/)
- [JSON Server](https://github.com/typicode/json-server)


## Getting Started
##### Local Application Development
1. Clone or download this repo onto your machine.
2. Install [application requirements](#application-requirements) if not done so already.
3. Open application directory in your terminal and run `npm install`
4. Install Ionic and Cordova command line tools using `npm install -g cordova ionic`
5. Add the target mobile platforms for your application using ionic platform add android (I tested on Android)
6. Start JSON Server:  `json-server --watch db.json`
7. Now connect your device (I tested on Android) and run your application by invoking ionic run android on the command line. (you might need the baseURL constant in your services.js accordingly to your environment).


## Troubleshooting
The primary source of debugging information is the logs. To see them, run the following command:

  ```
  $ ionic run android --livereload --consolelogs --serverlogs
  ```


