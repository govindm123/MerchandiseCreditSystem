module.exports = (sequelize, Sequelize) => {
	const Account = sequelize.define('account', {
	  externalId: {
		type: Sequelize.STRING
	  },
	  amount: {
		type: Sequelize.STRING
	  },
	  remark: {
		  type: Sequelize.STRING
	  }
	});
	
	return Account;
}