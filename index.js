var express = require('express');

var app = express();

var fs = require('fs');
const { response, json } = require('express');

var db = __dirname + "\\db.json";

/*


linksample = {
    
    id : ID_UNICO,
    url : URL_DO_MAGAZINE_LUIZA

}

*/

var Paths = {
    links: [] /* COLEÇÃO DE LINKSAMPLE  */
}

app.get('/redirec/:id', (req, res) => {

    var id = req.params.id;

    if (!getSite(id)) {

        res.json({ erro: "Não foi possivel localizar este link" });

        res.end();

    } else {
        res.redirect(getSite(id));
    }

})


var DB = () => {


    if (fs.existsSync(db)) {

        try {

            Paths = JSON.parse(fs.readFileSync(db, 'utf-8'));

            return true;

        } catch{

            console.log("Seu json esta errado, confira sua sintaxe");

            return false;
        }

    } else {

        fs.writeFileSync(db, JSON.stringify(Paths), 'utf8');

        return false;
    }
}

DB();

var getSite = (param) => {    

    for (let s of Paths.links) {
        if (s.id == param) {
            return s.url
        }
    }

    return false;
}


/*

app.listen(3000, () => {
    console.log('Servidor rodando na porta ');
})

*/


app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta' + process.env.PORT);
})



