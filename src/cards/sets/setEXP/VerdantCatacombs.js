"use strict";
const Constants = require ("../../../Constants");
const VerdantCatacombsBase = require("../setZEN/VerdantCatacombs");

class VerdantCatacombs extends VerdantCatacombsBase {
  constructor (game) {
    super(game, "Verdant Catacombs", "Zendikar Expedition", "EXP");
  }
}

module.exports = VerdantCatacombs;
