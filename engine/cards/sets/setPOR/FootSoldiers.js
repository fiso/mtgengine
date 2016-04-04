"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FootSoldiersBase = require("../set9ED/FootSoldiers.js");

class FootSoldiers extends FootSoldiersBase {
  constructor(game) {
    super(game, "Foot Soldiers", "Portal", "POR");
  }
}

module.exports = FootSoldiers;
