"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeaceTalks extends Card {
  constructor(game) {
    super(game, "Peace Talks", "Multiverse Gift Box", "MGB");
  }
}

module.exports = PeaceTalks;
