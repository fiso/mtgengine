"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorlandDrifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Moorland Drifter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoorlandDrifter;
