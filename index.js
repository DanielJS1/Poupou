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
                /* Home*/
                id: 1,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/"
            },
            {
                /* notebook compaq*/
                id: 226914400,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/p/notebook-compaq-presario-cq-27-intel-core-i3-4gb-240gb-ssd-141-linux/19261721/"
            },
            {
                /* A71 Samsung*/
                id: 155572900,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/p/smartphone-samsung-galaxy-a71-128gb-azul-6gb-ram-tela-67-cam-quadrupla-cam-selfie-32mp/13866068/"
            },
            {
                /* TV Samsung*/
                id: 225605700,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/p/smart-tv-crystal-uhd-4k-led-50-samsung-50tu8000-wi-fi-bluetooth-hdr-3-hdmi-2-usb/16054232/"
            },
            {
                /* iPhone XR*/
                id: 155556000,
                url: "https://www.magazinevoce.com.br/magazinepoupoubr/p/iphone-xr-apple-64gb-preto-61-12mp-ios/155556000/"
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



