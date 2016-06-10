"use strict";
const Constants = require ("../../../Constants");
const LumberknotBase = require("../setISD/Lumberknot");

class Lumberknot extends LumberknotBase {
  constructor (game) {
    super(game, "Lumberknot", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Lumberknot;
