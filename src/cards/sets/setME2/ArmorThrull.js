"use strict";
const Constants = require ("../../../Constants");
const ArmorThrullBase = require("../setFEM/ArmorThrull");

class ArmorThrull extends ArmorThrullBase {
  constructor (game) {
    super(game, "Armor Thrull", "Masters Edition II", "ME2");
  }
}

module.exports = ArmorThrull;
