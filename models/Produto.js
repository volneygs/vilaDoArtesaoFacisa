// models/Produto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Produto = sequelize.define('Produto', {
    id: {   type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            id_artesao: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            preco: DataTypes.INTEGER,
            imagem_produto: DataTypes.STRING,
            foto_artesao: DataTypes.STRING
});

module.exports = Produto;
