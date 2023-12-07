import { openDb } from "../../configDB.js";

export async function createTable7() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Podrutos_baixo_estoque ( id INTEGER PRIMARY KEY, produto TEXT, quantidade_atual INTEGER, valor_unitario INTEGER)')
    })
    /*Aqui vai criar a tabela*/
}

export async function selectBaixoEstoque(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Podruto_mais_vendidos').then(Podrutos_baixo_estoque => res.json(Podrutos_baixo_estoque));
    })
    /*Aqui vai selecionar todos os produtos com baixo estoque*/
}

export async function deleteBaixoEstoque(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Podrutos_baixo_estoque  WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
    /*Aqui vai deletar o relatorio*/
}
