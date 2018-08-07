"use strict";
const Constants = require ("../../../Constants");
const PrahvBase = require("../setPCA/Prahv");

class Prahv extends PrahvBase {
  constructor (game) {
    super(game, "Prahv", "Planechase 2012", "PC2");
  }
}

module.exports = Prahv;
