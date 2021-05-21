const express = require("express");
const jsonParser = express.json();

const app = express();

const port = process.env.PORT || 4000;

app.use(jsonParser);

const imageRouter = require("./routers/image");
app.use("/images", imageRouter);
const userRouter = require("./routers/user");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server on port${port}`);
});
