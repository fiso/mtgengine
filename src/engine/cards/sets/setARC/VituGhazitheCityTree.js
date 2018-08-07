"use strict";
const Constants = require ("../../../Constants");
const VituGhazitheCityTreeBase = require("../setPCA/VituGhazitheCityTree");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor (game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Archenemy", "ARC");
  }
}

module.exports = VituGhazitheCityTree;
