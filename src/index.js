const app = require('express')();

app.get('/', (req, res ) => 
    res.json ({ message: "You are the container to my code, perfectly running together ❤️" }) 
);

const port = process.env.PORT || 8090;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
