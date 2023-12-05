import { Router } from "express";
import { InsertPessoa, createTable, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';

const router = Router()

router.get('/', (req, res) => {
    res.json({
        "statuscode": 200,
        "msg": "Api Rodando"
    })
})
router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', InsertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);
export default router;