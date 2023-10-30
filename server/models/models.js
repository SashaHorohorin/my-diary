const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING(200), allowNull: false},
    note: {type: DataTypes.STRING(2000)},
    datetime: {type: DataTypes.DATE, allowNull: false}
})

module.exports = {
    Post
}