"use strict";
const Constants = require ("../../../Constants");
const BalduvianHordeBase = require("../setALL/BalduvianHorde");

class BalduvianHorde extends BalduvianHordeBase {
  constructor (game) {
    super(game, "Balduvian Horde", "Deckmasters", "DKM");
  }
}

module.exports = BalduvianHorde;
