const db = require('./db')

const Post = db.sequelize.define('produtos',{
    nome: {
        type: db.Sequelize.STRING
    },
    custo: {
        type: db.Sequelize.DECIMAL
    },
    preço: {
        type: db.Sequelize.DECIMAL
    },
    Qtd_estoque: {
        type: db.Sequelize.CHAR
    },
    codigo: {
        type: db.Sequelize.CHAR
    }
});

//Post.sync({force: true})

module.exports = Post