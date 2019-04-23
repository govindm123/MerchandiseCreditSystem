const db = require('../model/index');
// const Transaction = Models;
const Transaction = db.transaction;

// Post a Transaction
exports.create = (req, res) => {	
	// Save to MySQL database
	Transaction.create({  
        accountId: req.body.accountId,
        amount: req.body.amount,
        remark: req.body.remark,
        paymentType: req.body.paymentType,
	}).then(transaction => {		
		// Send created customer to client
		res.send(transaction);
	});
};
 
// FETCH all Transaction
exports.findAll = (req, res) => {
	Transaction.findAll().then(transactions => {
	  // Send all Account to Client
	  res.send(transactions);
	});
};

// Find a Transaction by Id
exports.findById = (req, res) => {	
	Transaction.findById(req.params.accountId).then(transaction => {
		res.send(transaction);
	})
};
 
// Delete a Transaction by Id
exports.delete = (req, res) => {
	const id = req.params.accountId;
	Transaction.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a account with id = ' + id);
	});
};