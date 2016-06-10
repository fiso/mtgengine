"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetingMemories extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleeting Memories", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FleetingMemories;
