const express = require('express');
const cors = require('cors');
const EventEmitter = require('events');

const PORT = 5000;

const emitter = new EventEmitter();

const app = express();

app.use(cors());
app.use(express.json())

const NEW_MESSAGE = 'newMessage';

app.use(cors())
app.use(express.json())

app.get('/get-messages', (req, res) => {
    emitter.once('newMessage', (message) => {
        res.json(message)
    })
})

app.post('/new-messages', ((req, res) => {
    const message = req.body;
    console.log(message);
    emitter.emit('newMessage', message)
    res.status(200)
    res.json({message});
}))


app.listen(PORT, () => {
    console.log(`Server has been started on PORT: ${PORT}`);
})
