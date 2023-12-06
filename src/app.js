// import { openDb } from './configDB.js';
// import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa,deletePessoa} from './Controler/Pessoa.js';
import { InsertProduto,createTable2,updateProduto,selectProdutos,selectProduto,deleteProduto } from './Controler/Produtos.js';
import express from 'express';
const app = express();
app.use(express.json())
import router from './routes.js'
app.use(router);


createTable2();
//createTable();

// app.get('/', function (req, res) {
//     res.send("Ola mundo")
// })
// app.get('/pessoas', async function (req, res) {
//     let pessoas = await selectPessoas();
//     res.json(pessoas);
// })
// app.get('/pessoa', async function (req, res) {
//     let pessoa = await selectPessoa(req.body.id);
//     res.json(pessoa);
// })/*buscar um único registro*/
// app.post('/pessoa', function (req, res) {
//     InsertPessoa(req.body)
//     res.json({
//         "statusCode": 200
//     })
// });
// app.put('/pessoa', function (req, res) {
//     if (req.body && !req.body.id) {
//         res.json({
//             "statusCode": "400",
//             "msg": "voce precisa informar um id"
//         })
//     } else {
//         updatePessoa(req.body)
//         res.json({
//             "statusCode": 200
//         })
//     }

// });
// app.delete('/pessoa', async function (req, res) {
//     let pessoa = await deletePessoa(req.body.id);
//     res.json(pessoa);
// })
app.listen(3000, () => console.log("Api Rodando"))