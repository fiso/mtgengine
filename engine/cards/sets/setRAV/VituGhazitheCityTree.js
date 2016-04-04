"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VituGhazitheCityTreeBase = require("../setARC/VituGhazitheCityTree.js");

class VituGhazitheCityTree extends VituGhazitheCityTreeBase {
  constructor(game) {
    super(game, "Vitu-Ghazi, the City-Tree", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VituGhazitheCityTree;
