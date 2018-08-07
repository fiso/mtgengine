"use strict";
const Constants = require ("../../../Constants");
const LumberknotBase = require("../setPCA/Lumberknot");

class Lumberknot extends LumberknotBase {
  constructor (game) {
    super(game, "Lumberknot", "Planechase 2012", "PC2");
  }
}

module.exports = Lumberknot;
