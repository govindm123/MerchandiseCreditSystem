const express = require('express');
const router = express.Router();
 
    const transactions = require('../controller/transaction.controller.js');
 
    // Create a new transactions
    router.post('/api/transactions', transactions.create);
 
    // Retrieve all transactions
    router.get('/api/transactions', transactions.findAll);
 
    // Retrieve a single transactions by Id
    router.get('/api/transactions/:accountId', transactions.findById);

    // Delete a transactions with Id
    router.delete('/api/transactions/:accountId', transactions.delete);

    module.exports = router;