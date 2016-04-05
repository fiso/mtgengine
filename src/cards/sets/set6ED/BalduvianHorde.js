"use strict";
const Constants = require ("../../../Constants");
const BalduvianHordeBase = require("../setALL/BalduvianHorde");

class BalduvianHorde extends BalduvianHordeBase {
  constructor(game) {
    super(game, "Balduvian Horde", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BalduvianHorde;
