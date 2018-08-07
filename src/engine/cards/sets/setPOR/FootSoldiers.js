"use strict";
const Constants = require ("../../../Constants");
const FootSoldiersBase = require("../set9ED/FootSoldiers");

class FootSoldiers extends FootSoldiersBase {
  constructor (game) {
    super(game, "Foot Soldiers", "Portal", "POR");
  }
}

module.exports = FootSoldiers;
