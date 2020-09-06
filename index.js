var express = require('express');

var app = express();

const { response, json } = require('express');

var db = __dirname + "\\db.json";




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


app.get('/check', (req, res) => {
    res.json({ sucesso: "Aplicação está rodando !!! " });
})


var DB = () => {

    Paths = {
        links: [
            {
                id: 2,
                url: "https://residentevil.com.br/jogos/"
            },
            {
                id: 3,
                url: "https://residentevil.com.br/category/reviews/"
            }
        ]
    }

    console.log(Paths);

    return true;

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




// app.listen(3000, () => {
//     console.log('Servidor rodando na porta ');
// })




app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta' + process.env.PORT);
})



