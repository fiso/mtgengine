"use strict";
const Constants = require ("../../../Constants");
const DarkwaterCatacombsBase = require("../setCM2/DarkwaterCatacombs");

class DarkwaterCatacombs extends DarkwaterCatacombsBase {
  constructor (game) {
    super(game, "Darkwater Catacombs", "Commander 2016", "C16");
  }
}

module.exports = DarkwaterCatacombs;
