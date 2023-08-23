const express = require('express');
const connectDB = require('./config/db')
const { auth, notes } = require('./routes/index')


const app = express();

// Database connction
connectDB;
app.use(express.json());
app.use('/api/auth', auth)
app.use('/api/notes', notes)

app.get('/', (req, res) => {
    res.send('Hello World');
})




PORT = 3030
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})