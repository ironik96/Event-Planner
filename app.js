const express = require("express");
const connectDB = require("./database");
const eventRoutes = require("./api/events/events.routes");

connectDB();
const app = express();

app.use(express.json());
app.use("/api/events", eventRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
