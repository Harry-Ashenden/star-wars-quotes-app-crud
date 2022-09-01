# star-wars-quotes-app-crud
A simple CRUD app that allows users to play around with star wars quotes

# Star Wars Quotes App
This is a simple app that lets users play around with star wars quotes by adding and removing them from a list. They can also choose to edit the list by letting Darth Vadar invade or removing Darth Vadar if they choose the light side.

**Link to project:** https://star-wars-quotes-app-crud.herokuapp.com/ (the database is IP dependent so you will not be able to access it)

![gif of the website](https://github.com/Harry-Ashenden/star-wars-quotes-app-crud/blob/main/assets/image-of-star-wars-quotes-app.JPG)

## How It's Made:

**Tech used:** EJS, CSS, JavaScript, Express, Node.js, MongoDb

This web app uses Express as a framework for Node.js for the backend with links to a MongoDb database for storing the data anf EJS for the views. I started by creating a wireframe of the project to plan the actions a user could do and then implemented them in a server.js file. Here I ensured that the database connection was secure by using a .env file. CSS was used to style the page making it look a bit cleaner that just simple lists on a page.

## Optimizations

To further enhance this project I would want users to be able to select the quotes they are replacing with Darth Vadar rather then replacing the fisrt instance of a Yoda quote. This would be done using object ID's from MongoDb. I would also add authentication meaning different users could have their own set of quotes to play around with and store them in seperate collections in MongoDb.

## Lessons Learned:

This CRUD app was eye-opening as to the potential for what is to come in my software journey and I also learnt a definite lesson in time management. In the futrue I will be starting the development process by creating a minimal viable product and from there, enhance it.


