
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Entries', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    date: {
      type: Sequelize.DATE,
    },
    channel: {
      type: Sequelize.INTEGER,
    },
    response: {
      type: Sequelize.INTEGER,
    },
    dm: {
      type: Sequelize.INTEGER,
    },
    multiDm: {
      type: Sequelize.INTEGER,
    },
    Sync: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Entries'),
};
