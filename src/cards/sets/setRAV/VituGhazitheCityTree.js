"use strict";
const Constants = require ("../../../Constants");
const VituGhazitheCityTreeBase = require("../setARC/VituGhazitheCityTree");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor (game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VituGhazitheCityTree;
