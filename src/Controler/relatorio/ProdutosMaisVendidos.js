import { openDb } from "../../configDB.js";

export async function createTable4() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Podrutos_mais_vendidos ( id INTEGER PRIMARY KEY, produto TEXT, quantidade_vendida INTEGER, mes TEXT, valor_unitario INTEGER)')
    })
    /*Aqui vai criar a tabela*/
}
export async function selectMaisVendido(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Podruto_mais_vendidos  WHERE id=?', [id]).then(Podruto_mais_vendidos => Podruto_mais_vendidos.json(Podruto_mais_vendidos));
    })
    /*Aqui vai selecionar um único relatório*/
}
export async function selectMaisVendidos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Podruto_mais_vendidos').then(Podruto_mais_vendidos => res.json(Podruto_mais_vendidos));
    })
    /*Aqui vai selecionar todos os relatórios mensais*/
}

export async function deleteMaisVendido(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Podruto_mais_vendidos WHERE id=?', [id]).then(res => res);
    });
    res.json({
        "statusCode": 200
    })
    /*Aqui vai deletar o relatorio*/
}
