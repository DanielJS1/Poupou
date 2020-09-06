var express = require('express');

var app = express();

const { response, json } = require('express');

var Paths = {
    links: [] 
}

app.get('/redirect/:id', (req, res) => {

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
                id: 4,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/p/smartphone-samsung-galaxy-a01-32gb-vermelho-2gb-ram-tela-57-cam-dupla-cam-selfie-5mp/16391013/"
            }
        ]
    }

    

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



