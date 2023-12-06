import { openDb } from "../configDB.js";


export async function createTable2() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Produto ( id INTEGER PRIMARY KEY, nome TEXT, valor INTEGER, tipo TEXT, quantidade INTEGER)');
    });
}

export async function selectProdutos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Produto').then(produto => res.json(produto));
    });
}
export async function selectProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Produto WHERE id=?', [id]).then(produto => res.json(produto));
    });
}/*individualmente*/

export async function InsertProduto(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Produto (nome, valor, tipo, quantidade) VALUES(?,?,?,?)', [produto.nome, produto.valor, produto.tipo, produto.quantidade]);
    });
    res.json({
        "statusCode": 200
    })
}
export async function updateProduto(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('UPDATE Produto SET nome = ?, valor =?, tipo =?, quantidade?, WHERE id =?', [produto.nome, produto.valor, produto.tipo, produto.id, produto.quantidade]);
    })
    res.json({
        "statusCode": 200
    });
}
export async function deleteProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Produto WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
}