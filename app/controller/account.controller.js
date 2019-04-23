const db = require('../model/index');
// const Transaction = Models;
const Account = db.account;

// Post a Account
exports.create = (req, res) => {	
	// Save to MySQL database
	Account.create({  
	  externalId: req.body.externalId,
	  amount: req.body.amount,
	  remark: req.body.remark
	}).then(account => {		
		// Send created customer to client
		res.send(account);
	});
};
 
// FETCH all Account
exports.findAll = (req, res) => {
	Account.findAll().then(accounts => {
		// Send all Account to Client
			res.send(accounts);
	});
};

// Find a Account by Id
exports.findById = (req, res) => {	
	Account.findById(req.params.accountId).then(account => {
		res.send(account);
	})
};
 
// Update a Account
exports.update = (req, res) => {
	const id = req.params.accountId;
	Account.update( { externalId: req.body.externalId, amount: req.body.amount, remark: req.body.remark }, 
					 { where: {id: req.params.accountId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a account with id = " + id);
				   });
};
 
// Delete a Account by Id
exports.delete = (req, res) => {
	const id = req.params.accountId;
	Account.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a account with id = ' + id);
	});
};