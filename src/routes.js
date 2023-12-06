import { Router } from "express";
import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';
import { InsertProduto,createTable2,updateProduto,selectProdutos,selectProduto,deleteProduto } from './Controler/Produtos.js';
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

router.get('/produtos',selectProdutos)
router.get('/produto',selectProduto)
router.post('/produto', InsertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', deleteProduto);
export default router;