import express, { Express, Response } from 'express';

const app: Express = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", (_, res: Response) => {
  res.render("index");
});

app.get("/inputs", (_, res: Response) => {
  res.render("inputs");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});