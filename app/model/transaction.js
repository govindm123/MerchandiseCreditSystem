module.exports = (sequelize, DataTypes) => {
	const Transaction = sequelize.define('transaction', {
		id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
	  amount: {
		type: DataTypes.STRING
	  },
	  remark: {
		  type: DataTypes.STRING
      },
      paymentType: {
        type: DataTypes.STRING
    },
	});	
	  Transaction.associate = models => {
    Transaction.belongsTo(models.account);
  };
	return Transaction;
}