const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello World!'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 