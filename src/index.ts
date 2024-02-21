import express, { Application } from 'express';

import { env } from './lib/env/env';
import docsRoute from './module/docs/docs.route';

const app: Application = express();
const port = env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/docs/', docsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
