const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'storage/uploads/images');
    },
    filename (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    if(req.file) {
        // I can access req.body from here if I want
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});