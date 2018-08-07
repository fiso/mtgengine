"use strict";
const Constants = require ("../../../Constants");
const GhostCouncilofOrzhovaBase = require("../setMM2/GhostCouncilofOrzhova");

class GhostCouncilofOrzhova extends GhostCouncilofOrzhovaBase {
  constructor (game) {
    super(game, "Ghost Council of Orzhova", "Guildpact", "GPT");
  }
}

module.exports = GhostCouncilofOrzhova;
