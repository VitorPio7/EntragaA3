//import { openDb } from './configDB.js';
import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';
import { InsertProduto, createTable2, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controler/Produtos.js';
import express from 'express';
import { InsertCarrinho, createTable3, updateCarrinho, selectCarrinhos, selectCarrinho, deleteCarrinho } from './Controler/Carrinho.js'

const app = express();
app.use(express.json())
import router from './routes.js'
app.use(router);

createTable();

createTable3();

createTable2();

app.listen(3000, () => console.log("Api Rodando"))