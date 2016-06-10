"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceBubble extends UnimplementedCard {
  constructor (game) {
    super(game, "Force Bubble", "Scourge", "SCG");
  }
}

module.exports = ForceBubble;
