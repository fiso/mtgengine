"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdantCatacombsBase = require("../setZEN/VerdantCatacombs.js");

class VerdantCatacombs extends VerdantCatacombsBase {
  constructor(game) {
    super(game, "Verdant Catacombs", "Zendikar Expedition", "EXP");
  }
}

module.exports = VerdantCatacombs;
