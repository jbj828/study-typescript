import cookieSession from 'cookie-session';
import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieSession({ keys: ['salfksdf'] }));
app.use(router);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
