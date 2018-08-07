"use strict";
const Constants = require ("../../../Constants");
const PeaceTalksBase = require("../setVIS/PeaceTalks");

class PeaceTalks extends PeaceTalksBase {
  constructor (game) {
    super(game, "Peace Talks", "Multiverse Gift Box", "MGB");
  }
}

module.exports = PeaceTalks;
