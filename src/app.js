//import { openDb } from './configDB.js';
import express from 'express';
import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';
import { InsertProduto, createTable2, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controler/Produtos.js';
import { InsertCarrinho, createTable3, updateCarrinho, selectCarrinhos, selectCarrinho, deleteCarrinho } from './Controler/Carrinho.js'
import { createTable4, selectMaisVendido, selectMaisVendidos, deleteMaisVendido } from './Controler/relatorio/ProdutosMaisVendidos.js'
import { createTable5, InsertProdutoCliente, deleteProdutoCliente, selectProdutoCliente, selectProdutosClientes, updateProdutoCliente } from "./Controler/relatorio/ProdutosPorCliente.js";
import { createTable6, InsertConsumo, deleteConsumo, selecConsumo, selectConsumoTotal, updateConsumo } from './Controler/relatorio/ConsumoMedioDoCliente.js';
import { createTable7, deleteBaixoEstoque, selectBaixoEstoque } from "./Controler/relatorio/ProdutosBaixoEstoque.js";

const app = express();
app.use(express.json())
import router from './routes.js'
app.use(router);

createTable();/*Criacao de tabela sem dados*/

createTable3();

createTable2();

createTable4();

createTable5();

createTable6();

createTable7();

app.listen(3000, () => console.log("Api Rodando"))