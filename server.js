let express = require('express');
let app = express();
let PORT = 5000;

app.get('/', (req, res) =>{
    res.send('Hello this is the start of this')
})

//port listen
app.listen(PORT, () =>{
    console.log(`Server is listening at port ${PORT}`)
});