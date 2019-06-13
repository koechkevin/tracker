
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    userId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    channel: DataTypes.INTEGER,
    response: DataTypes.INTEGER,
    dm: DataTypes.INTEGER,
    multiDm: DataTypes.INTEGER,
    Sync: DataTypes.INTEGER,
  }, {});
  Entry.associate = function (models) {
    Entry.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return Entry;
};
