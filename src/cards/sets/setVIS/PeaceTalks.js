"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceTalks extends UnimplementedCard {
  constructor (game) {
    super(game, "Peace Talks", "Visions", "VIS");
  }
}

module.exports = PeaceTalks;
