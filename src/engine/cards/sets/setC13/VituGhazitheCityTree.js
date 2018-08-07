"use strict";
const Constants = require ("../../../Constants");
const VituGhazitheCityTreeBase = require("../setPCA/VituGhazitheCityTree");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor (game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Commander 2013", "C13");
  }
}

module.exports = VituGhazitheCityTree;
