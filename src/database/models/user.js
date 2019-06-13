
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    level: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Entry, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return User;
};
