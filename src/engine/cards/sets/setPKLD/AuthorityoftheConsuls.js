"use strict";
const Constants = require ("../../../Constants");
const AuthorityoftheConsulsBase = require("../setKLD/AuthorityoftheConsuls");

class AuthorityoftheConsuls extends AuthorityoftheConsulsBase {
  constructor (game) {
    super(game, "Authority of the Consuls", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AuthorityoftheConsuls;
