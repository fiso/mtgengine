"use strict";
const Constants = require ("../../../Constants");
const VituGhazitheCityTreeBase = require("../setARC/VituGhazitheCityTree");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor (game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Commander 2013 Edition", "C13");
  }
}

module.exports = VituGhazitheCityTree;
