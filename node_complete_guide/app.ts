let express = require('express')

let bodyParser = require('body-parser')

import todosRoutes from './routes/todos';

let app = express();

app.use(bodyParser.json())

app.use(todosRoutes)

app.listen(3000)    