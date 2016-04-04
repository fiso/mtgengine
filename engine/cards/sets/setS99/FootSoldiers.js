"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FootSoldiersBase = require("../set9ED/FootSoldiers.js");

class FootSoldiers extends FootSoldiersBase {
  constructor(game) {
    super(game, "Foot Soldiers", "Starter 1999", "S99");
  }
}

module.exports = FootSoldiers;
