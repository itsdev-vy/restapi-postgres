import { Model } from "sequelize";

export default async (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            Users.hasMany(models.post, { foreignKey: 'id' });
        }
    };
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'User'
    });
    return User
}