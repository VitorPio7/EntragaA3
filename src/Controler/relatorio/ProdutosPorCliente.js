import { openDb } from "../../configDB.js";


export async function createTable5() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Produto_por_cliente ( id INTEGER PRIMARY KEY, cliente TEXT, produto TEXT, quantidade INTEGER, valor INTEGER, Marca TEXT,data TEXT)');
    });
}

export async function selectProdutosClientes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Produto_por_cliente').then(Produto_por_cliente => res.json(Produto_por_cliente));
    });
}/*Todos os clientes */
export async function selectProdutoCliente(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Produto_por_cliente WHERE id=?', [id]).then(Produto_por_cliente => res.json(Produto_por_cliente));
    });
}/*individualmente*/

export async function InsertProdutoCliente(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Produto_por_cliente (cliente, produto, quantidade, valor, Marca,data) VALUES(?,?,?,?,?,?)', [produto.quantidade, produto.valor, produto.cliente, produto.produto, produto.Marca, produto.data]);
    });
    res.json({
        "statusCode": 200
    })
}
export async function updateProdutoCliente(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('UPDATE Produto_por_cliente SET cliente = ?, produto =?, quantidade =?, valor =?, Marca =?, data?, WHERE id =?', [produto.cliente, produto.produto, produto.quantidade, produto.id, produto.valor, produto.Marca, produto.data]);
    })
    res.json({
        "statusCode": 200
    });
}
export async function deleteProdutoCliente(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Produto_por_cliente WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
}