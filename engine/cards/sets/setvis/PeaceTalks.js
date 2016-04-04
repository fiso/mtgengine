"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeaceTalksBase = require("../setMGB/PeaceTalks.js");

class PeaceTalks extends PeaceTalksBase {
  constructor(game) {
    super(game, "Peace Talks", "Visions", "VIS");
  }
}

module.exports = PeaceTalks;
