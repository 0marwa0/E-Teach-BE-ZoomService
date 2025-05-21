const express = require("express");
const app = express();
require("dotenv").config();
const zoomRoutes = require("./routes/zoomRoutes");

app.use(express.json());
app.use("/zoom", zoomRoutes);
app.get("/", (req, res) => {
  res.send("Zoom service!!");
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Zoom service running on port ${PORT}`));
