"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingStones extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalking Stones", "Tempest Remastered", "TPR");
  }
}

module.exports = StalkingStones;
