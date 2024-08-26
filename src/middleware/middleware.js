import cors from 'cors';
import bodyParser from 'body-parser';


export default function (app) {
    app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'] }));
    app.use((req, res, next) => {
        res.setTimeout(10000)
        next();
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}