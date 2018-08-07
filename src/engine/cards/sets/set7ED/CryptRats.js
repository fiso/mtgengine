"use strict";
const Constants = require ("../../../Constants");
const CryptRatsBase = require("../setPHUK/CryptRats");

class CryptRats extends CryptRatsBase {
  constructor (game) {
    super(game, "Crypt Rats", "Seventh Edition", "7ED");
  }
}

module.exports = CryptRats;
