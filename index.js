const express = require("express");
const app = express()
const Post = require('./post');
const cors = require('cors'); 

app.use(cors());
app.use(express.json());

//recebendo
app.post('/add', (req, res) => {
    const { nome, custo, preço, Qtd_estoque, codigo } = req.body; 
      Post.create({
         nome: req.body.nome,
         custo: req.body.custo,
         preço: req.body.preço,
         Qtd_estoque: req.body.Qtd_estoque,
         codigo: req.body.codigo
      }).then(function(){
        res.json({ message: 'Dados recebidos com sucesso!' });
      }).catch(function(erro){
        res.status(500).json({ erro: erro.toString() });
      });
   })

   //enviando ao front
   app.get('/dados', function(req, res) {
    Post.findAll({order: [['id', 'ASC']]}).then(function(posts) { 
        const postData = posts.map(post => ({
            createdAt: post.createdAt,
            id: post.id,
            nome: post.nome,
            custo: post.custo,
            preço: post.preço,
            Qtd_estoque: post.Qtd_estoque,
            codigo: post.codigo
        }));
        res.json(postData);
    }); 
});

//CALLBACK    
    app.listen(8081, function(){
        console.log("Servidor Rodando na url http://localhost:8081")
    });