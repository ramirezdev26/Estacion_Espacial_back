const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');
const { logError, errorHandler, wrapError } = require('./middlewares/errorHandlers');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(notFoundHandler);

app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is runing inport: ' + port);
});
