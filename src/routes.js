import { Router } from "express";
import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';
import { InsertProduto, createTable2, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controler/Produtos.js';
import { InsertCarrinho, createTable3, updateCarrinho, selectCarrinhos, selectCarrinho, deleteCarrinho } from './Controler/Carrinho.js'
import { createTable4, selectMaisVendido, selectMaisVendidos, deleteMaisVendido } from './Controler/relatorio/ProdutosMaisVendidos.js'
import { createTable5, InsertProdutoCliente, deleteProdutoCliente, selectProdutoCliente, selectProdutosClientes, updateProdutoCliente } from "./Controler/relatorio/ProdutosPorCliente.js";
import { createTable6, InsertConsumo, deleteConsumo, selecConsumo, selectConsumoTotal, updateConsumo } from './Controler/relatorio/ConsumoMedioDoCliente.js';
import { createTable7, deleteBaixoEstoque, selectBaixoEstoque } from "./Controler/relatorio/ProdutosBaixoEstoque.js";

const router = Router()

router.get('/', (req, res) => {
    res.json({
        "statuscode": 200,
        "msg": "Api Rodando"
    })
})

/*Rotas de pessoas*/
router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', InsertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

/*Rotas de produtos*/

router.get('/produtos', selectProdutos)
router.get('/produto', selectProduto)
router.post('/produto', InsertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', deleteProduto);

/*Rotas de carrinhos*/

router.get('/carrinhos', selectCarrinhos)
router.get('/carrinho', selectCarrinho)
router.post('/carrinho', InsertCarrinho);
router.put('/carrinho', updateCarrinho);
router.delete('/carrinho', deleteCarrinho);

/*Rotas do relatorio do produto mais vendido do mes*/
router.get('/ProdutosMaisVendidos', selectMaisVendidos)
router.get('/ProdutosMaisVendido', selectMaisVendido)
router.delete('/ProdutosMaisVendido', deleteMaisVendido)

/*Rotas do relatorio de produtos por cliente*/
router.get('/ProdutosPorClientes', selectProdutosClientes)
router.get('/ProdutoPorCliente', selectProdutoCliente)
router.post('/ProdutoPorCliente', InsertProdutoCliente)
router.put('/ProdutoPorCliente', updateProdutoCliente)
router.delete('/ProdutoPorCliente', deleteProdutoCliente)

/*Rotas do relatorio de produto medio por cliente*/
router.get('/ConsumoMedioDoClientes', selectConsumoTotal)
router.get('/ConsumoMedioDoCliente', selecConsumo)
router.post('/ConsumoMedioDoCliente', InsertConsumo)
router.put('/ConsumoMedioDoCliente', updateConsumo)
router.delete('/ConsumoMedioDoCliente', deleteConsumo)

/*Rotas do relatorio de produto com baixo estoque*/
router.get('/ProdutosBaixoEstoque', selectBaixoEstoque)
router.delete('/ProdutosBaixoEstoque', deleteBaixoEstoque)

export default router;