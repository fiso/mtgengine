"use strict";
const Constants = require ("../../../Constants");
const VerdantCatacombsBase = require("../setMM3/VerdantCatacombs");

class VerdantCatacombs extends VerdantCatacombsBase {
  constructor (game) {
    super(game, "Verdant Catacombs", "Zendikar", "ZEN");
  }
}

module.exports = VerdantCatacombs;
