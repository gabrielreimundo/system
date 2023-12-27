const Sequelize = require('sequelize')
const sequelize = new Sequelize('estoque', 'root','0070090',{
host: "localhost",
dialect: 'mysql'
})





//callback cmd
sequelize.authenticate().then(function(){
    console.log('Banco de dados conectado com sucesso!')
}).catch(function(erro){
    console.log("Falha ao se conectar com o banco de dados: "+erro)
})
//expotação
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}