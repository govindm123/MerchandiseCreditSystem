const express = require('express');
const router = express.Router();
    const accounts = require('../controller/account.controller.js');
 
    // Create a new Account
    router.post('/api/accounts', accounts.create);
 
    // Retrieve all Account
    router.get('/api/accounts', accounts.findAll);
 
    // Retrieve a single Account by Id
    router.get('/api/accounts/:accountId', accounts.findById);
 
    // Update a Account with Id
    router.put('/api/accounts/:accountId', accounts.update);
 
    // Delete a Account with Id
    router.delete('/api/accounts/:accountId', accounts.delete);
 
    module.exports = router;