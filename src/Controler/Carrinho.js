import { openDb } from "../configDB.js";

export async function createTable3() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Carrinho ( id INTEGER PRIMARY KEY, cliente TEXT, email TEXT, produto TEXT, valor INTEGER)')
    })
}/*criacao de tabela de compras*/
export async function selectCarrinho(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Carrinho WHERE id=?', [id]).then(carrinho => res.json(carrinho));
    })
}/*vai selecionar um carrinho de uma pessoa específica*/

export async function selectCarrinhos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Carrinho').then(carrinho => res.json(carrinho));
    })
}/*vai selecionar todos os carrinhos*/

export async function InsertCarrinho(req, res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Carrinho (cliente, email, produto, valor) VALUES(?,?,?,?)', carrinho.cliente, carrinho.email, carrinho.produto, carrinho.valor);
    })
    res.json({
        "statusCode": 200
    })
}/*colocar o produto*/

export async function updateCarrinho(req, res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run('UPDATE Carrino SET cliente = ?, email =?, produto =? valor=? WHERE id =?', carrinho.cliente, carrinho.email, carrinho.produto, carrinho.valor, carrinho.id);
    })
    res.json({
        "statusCode": 200
    });
}/*atualizar carrinho*/
export async function deleteCarrinho(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT FROM Carrinho WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
}/*deletar carrinho*/

/*O projeto vai ser como se a api respondesse a um usuário master ou um cliente comum?*/