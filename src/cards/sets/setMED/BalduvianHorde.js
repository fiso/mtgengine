"use strict";
const Constants = require ("../../../Constants");
const BalduvianHordeBase = require("../setA25/BalduvianHorde");

class BalduvianHorde extends BalduvianHordeBase {
  constructor (game) {
    super(game, "Balduvian Horde", "Masters Edition", "MED");
  }
}

module.exports = BalduvianHorde;
