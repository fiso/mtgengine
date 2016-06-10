"use strict";
const Constants = require ("../../../Constants");
const PeaceTalksBase = require("../setMGB/PeaceTalks");

class PeaceTalks extends PeaceTalksBase {
  constructor (game) {
    super(game, "Peace Talks", "Visions", "VIS");
  }
}

module.exports = PeaceTalks;
