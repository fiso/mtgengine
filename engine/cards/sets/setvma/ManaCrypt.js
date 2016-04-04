"use strict";
const Constants = require ("../../../Constants");
const ManaCryptBase = require("../setpJGP/ManaCrypt");

class ManaCrypt extends ManaCryptBase {
  constructor(game) {
    super(game, "Mana Crypt", "Vintage Masters", "VMA");
  }
}

module.exports = ManaCrypt;
