"use strict";
const Constants = require ("../../../Constants");
const BalduvianHordeBase = require("../setA25/BalduvianHorde");

class BalduvianHorde extends BalduvianHordeBase {
  constructor (game) {
    super(game, "Balduvian Horde", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BalduvianHorde;
