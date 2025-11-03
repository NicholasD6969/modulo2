const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_atvd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    formaPagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nome', 'email', 'telefone', 'formaPagamento', 'endereco', 'createdAt', 'updatedAt']
        });
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ mensagem: 'Erro ao buscar usuários' });
    }
});

app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, telefone, formaPagamento, endereco } = req.body;
        const novoUsuario = await Usuario.create({ nome, email, telefone, formaPagamento, endereco });
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(400).json({ mensagem: "Cliente já cadastrado ou dados inválidos" });
    }
});

app.get('/produtos', async (req, res) => {
    try {
        const produtos = await Produto.findAll({
            attributes: ['id', 'nome', 'lote', 'validade', 'categoria', 'quantidade', 'createdAt', 'updatedAt']
        });
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
    }
});

app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade, categoria, quantidade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade, categoria, quantidade });
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(400).json({ mensagem: "Produto já cadastrado ou dados inválidos" });
    }
});


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 API rodando em http://localhost:${PORT}`);
        console.log('🚀 Conectado ao banco de dados MySQL e tabelas recriadas!');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});