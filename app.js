const express = require("express");
const connectDB = require("./database");
const eventRoutes = require("./api/events/events.routes");
const PORT = 8000;

connectDB();
const app = express();

app.use(express.json());
app.use("/api/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`The application is running on localhost: ${PORT}`);
});
