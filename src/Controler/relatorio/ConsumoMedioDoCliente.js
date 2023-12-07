import { openDb } from "../../configDB.js";


export async function createTable6() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Consumo_medio_cliente ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER, email TEXT, quantidade INTEGER)')
    })
}

export async function selectConsumoTotal(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Consumo_medio_cliente').then(Consumo_medio_cliente => res.json(Consumo_medio_cliente));
    })
}
export async function selecConsumo(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Consumo_medio_cliente WHERE id=?', [id]).then(Consumo_medio_cliente => res.json(Consumo_medio_cliente));
    })
}/*individualmente*/

export async function InsertConsumo(req, res) {
    let Consumo_medio_cliente = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Consumo_medio_cliente (nome, idade, email,quantidade) VALUES(?,?,?,?)', [Consumo_medio_cliente.nome, Consumo_medio_cliente.idade, Consumo_medio_cliente.email, Consumo_medio_cliente.quantidade]);
    })
    res.json({
        "statusCode": 200
    })
}
export async function updateConsumo(req, res) {
    let Consumo_medio_cliente = req.body;
    openDb().then(db => {
        db.run('UPDATE  SET nome = ?, idade =?, email =?, quantidade = ?, WHERE id =?', [Consumo_medio_cliente.nome, Consumo_medio_cliente.idade, Consumo_medio_cliente.email, Consumo_medio_cliente.quantidade, Consumo_medio_cliente.id]);
    })
    res.json({
        "statusCode": 200
    });
}
export async function deleteConsumo(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Consumo_medio_cliente WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
}