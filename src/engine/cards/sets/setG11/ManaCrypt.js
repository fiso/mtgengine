"use strict";
const Constants = require ("../../../Constants");
const ManaCryptBase = require("../setMPS/ManaCrypt");

class ManaCrypt extends ManaCryptBase {
  constructor (game) {
    super(game, "Mana Crypt", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = ManaCrypt;
