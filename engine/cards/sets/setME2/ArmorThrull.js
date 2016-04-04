"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmorThrullBase = require("../setFEM/ArmorThrull.js");

class ArmorThrull extends ArmorThrullBase {
  constructor(game) {
    super(game, "Armor Thrull", "Masters Edition II", "ME2");
  }
}

module.exports = ArmorThrull;
