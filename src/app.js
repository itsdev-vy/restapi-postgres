import express from 'express';
import { PORT } from './env.js';
import middleware from './middleware/middleware.js';
import routes from './setup/parentRoutes.js';

const app = express();

middleware(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});