const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    
        }, 
    created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.DATE
    },
        blog_id: {
            type: DataTypes.INTEGER,      
            references: {
              model: "blog",
              key: 'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER,      
            references: {
              model: "user",
              key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);

module.exports = Comment;
