import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';

const port = 8000;
const app = express();

// app.get('/', (req, res)=>{
//     res.send('<h1>Wellcomeeeeeeeeee</h1>');
// })
// app.get('/user', (req, res)=>{
//     const name = req.query?.name || 'User';
//     const surname = req.query?.surname || '';
//     res.send(`<h1>Hello ${name} ${surname}</h1>`);
// })



// ******************************   1   *************************
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to our shop</h1>');
// });

// app.get('/product', (req, res) => {
//   let title = req.query?.title || 'Title';
//   const price = req.query?.price || 'Price';
//   res.send(`<h1>${title}</h1>  <h2>For just ${price}</h2>`);
// });


// http://localhost:8000/product?title=Iphone&price=999.99   задати в url



// *******************   2   ***********
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// })



// *********************   3  ***********************
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.set('view engine', 'pug');

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// })

// app.get('/product', (req, res)=>{
//     const title = req.query?.title || '';
//     const price = req.query?.price || '';
   
//     res.render('product', {product_title: title, product_price: price})
//     // res.send(`<h1> ${title} </h1> <h2> For just ${price} </h2>`);
// })




// ******************   4   **************
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));

// http://localhost:8000/api-docs/


app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`);
})