import e from "express";
import path from "path";
import { fileURLToPath } from "url"; 

const app = e();

const __dirname = fileURLToPath(new URL(".", import.meta.url));

app.use(e.static(path.resolve(__dirname, '..', 'web', 'dist')));

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});