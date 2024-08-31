const express = require('express');
const db = require("./db/mogoose");
const app = express();
const cors = require('cors');
const Login = require("./routes/login");
const Register = require("./routes/register");
const User = require("./routes/Upload");
const Data = require("./routes/dispclients");
const Adminlogin = require("./routes/adminlogin");
const DashboardCount = require("./routes/DashoardCount");
const bodyParser = require('body-parser');

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/login', Login);
app.use('/register', Register);
app.use('/form', User);
// app.use('/dashboard', Data);
app.use('/adminlogin', Adminlogin);
app.use('/dashboard', DashboardCount);

app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});
