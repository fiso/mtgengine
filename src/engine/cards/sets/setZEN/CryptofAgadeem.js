"use strict";
const Constants = require ("../../../Constants");
const CryptofAgadeemBase = require("../setC14/CryptofAgadeem");

class CryptofAgadeem extends CryptofAgadeemBase {
  constructor (game) {
    super(game, "Crypt of Agadeem", "Zendikar", "ZEN");
  }
}

module.exports = CryptofAgadeem;
