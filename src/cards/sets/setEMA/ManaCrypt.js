"use strict";
const Constants = require ("../../../Constants");
const ManaCryptBase = require("../setMPS/ManaCrypt");

class ManaCrypt extends ManaCryptBase {
  constructor (game) {
    super(game, "Mana Crypt", "Eternal Masters", "EMA");
  }
}

module.exports = ManaCrypt;
