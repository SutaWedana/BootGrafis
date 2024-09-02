const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
    const { name, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bootgrafis@gmail.com',
            pass: 'BGBootGrafis021024'
        }
    });const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const app = express();
    
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.post('/send', (req, res) => {
        const { name, message } = req.body;
    
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bootgrafis@gmail.com',
                pass: 'BGBootGrafis021024'
            }
        });
    
        let mailOptions = {
            from: 'bootgrafis@gmail.com',
            to: 'bootgrafis@gmail.com',
            subject: `Message from ${name}`,
            text: message
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending message');
            }
            res.status(200).send('Message sent successfully');
        });
    });
    
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
    });
    

    let mailOptions = {
        from: 'bootgrafis@gmail.com',
        to: 'bootgrafis@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending message');
        }
        res.status(200).send('Message sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

