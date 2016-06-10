"use strict";
const Constants = require ("../../../Constants");
const CryptRatsBase = require("../set7ED/CryptRats");

class CryptRats extends CryptRatsBase {
  constructor (game) {
    super(game, "Crypt Rats", "Visions", "VIS");
  }
}

module.exports = CryptRats;
