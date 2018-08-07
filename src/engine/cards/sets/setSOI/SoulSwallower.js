"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSwallower extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Swallower", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SoulSwallower;
