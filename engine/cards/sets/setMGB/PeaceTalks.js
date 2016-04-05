"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceTalks extends UnimplementedCard {
  constructor(game) {
    super(game, "Peace Talks", "Multiverse Gift Box", "MGB");
  }
}

module.exports = PeaceTalks;
