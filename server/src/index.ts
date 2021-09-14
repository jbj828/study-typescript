import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieSession({ keys: ['salfksdf'] }));
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
