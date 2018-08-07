"use strict";
const Constants = require ("../../../Constants");
const ArmorThrullBase = require("../setME2/ArmorThrull");

class ArmorThrull extends ArmorThrullBase {
  constructor (game) {
    super(game, "Armor Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = ArmorThrull;
