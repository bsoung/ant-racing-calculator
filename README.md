# Ant Race Calculator - win more ant races!

![Ant Race](https://imgur.com/Ti2J6YX.png "Ant Race Alt")

We all know the coolest sport right now is competitive ant racing. Now enthusiasts can better their chances of winning those ant racing bets.

This application grabs data from a GraphQL endpoint using the Relay library. For more information, visit their official sites:

[GraphQL](https://www.graphql.com/)
[Relay](https://facebook.github.io/relay/)

## Technologies

Frontend:
* React
* Relay

## To Develop / Running the App Locally

* Fork and clone the repository.
* Go to the root directory of the folder and run the follow command in the terminal:
```
npm i 
```
* 

```
npm run dev
```
* Visit localhost:3000 

* This app was made with an ejected React-Create-App generator. If you run into any strange problems, be sure to post an issue on ther [Repo Page](https://github.com/facebookincubator/create-react-app)

* If you run into any problems with GraphQL or Relay configurations, you may need to run these commands to grab a fresh scheme from the Ant API and generate some new .graphql files. Replace '__GRAPHQL_API_ENDPOINT__' with the appropriate Ant API endpoint.

```
npm install -g get-graphql-schema 

get-graphql-schema __GRAPHQL_API_ENDPOINT__ > ./schema.graphql 
```
* Then run the compiler. Make sure you are in the root directory.

```
relay-compiler --src ./src --schema ./schema.graphql
```








