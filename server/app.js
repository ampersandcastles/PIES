require("dotenv").config();
const Express = require("express");
const app = Express();
app.use(Express.json());
const controllers = require("./controllers");
const middleware = require("./middleware");

const dbConnection = require("./db");

// app.use(Express.static(__dirname +'/public'));
// console.log(__dirname);

// app.use('/', (req, res) => res.render('index'));

app.use(middleware.headers);

app.use("/user", controllers.usercontroller);
app.use("/pies", controllers.piecontroller);

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`[Server]: App is listening on ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log(`[Server]: has crashed. Error is ${err}.`);
  });
