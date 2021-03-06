module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.assoicate = (models) => {
    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };

  return Users;
};
