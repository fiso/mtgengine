"use strict";
const Constants = require ("../../../Constants");
const VituGhazitheCityTreeBase = require("../setPCA/VituGhazitheCityTree");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor (game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Planechase 2012", "PC2");
  }
}

module.exports = VituGhazitheCityTree;
