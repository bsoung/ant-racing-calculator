# Ant Race Calculator - win more ant races!

![Ant Race](https://imgur.com/Ti2J6YX.png "Ant Race Alt")

We all know the coolest sport right now is competitive ant racing. Now you can get in on the action with some serious advantage! You'll find out which prize ant has the best chance of winning the race with this awesome little tool.

This application grabs data from a GraphQL endpoint using the Relay library. GraphQL is seriously cool stuff. For more information, visit the official sites:

* [GraphQL](https://www.graphql.com/)
* [Relay](https://facebook.github.io/relay/)

## Technologies

Frontend:
* React
* Relay

Tools:
* Webpack
* Babel

## To Develop / Running the App Locally

* Fork and clone the repository.
* Go to the root directory of the cloned folder and run the follow command in the terminal:
```
npm i 
```
* After successful installation, stay in the root directory of the app, and run the following command:

```
npm run dev
```
* Visit localhost:3000 

* Enjoy!

* This app was made with an ejected React-Create-App generator. If you run into any strange problems, be sure to post an issue on ther [Repo Page](https://github.com/facebookincubator/create-react-app).

* If you run into any problems with GraphQL or Relay configurations, you may need to run these commands to grab a fresh scheme from the Ant API and generate some new .graphql files. Replace '__GRAPHQL_API_ENDPOINT__' with the appropriate Ant API endpoint.

```
npm install -g get-graphql-schema 

get-graphql-schema GRAPHQL_API_ENDPOINT > ./schema.graphql 
```
* Then run the compiler. Make sure you are in the root directory.

```
relay-compiler --src ./src --schema ./schema.graphql
```

* After that, try running 'npm run start' again, and that should solve any schema problems. Have fun!






