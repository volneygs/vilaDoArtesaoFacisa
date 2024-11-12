const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('viladoartesao', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

// Teste de conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados bem-sucedida!');
    } catch (error) {
        console.error('Erro ao conectar-se ao banco de dados:', error);
    }
})();

module.exports = sequelize;
