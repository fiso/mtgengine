"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunawayCarriage extends UnimplementedCard {
  constructor (game) {
    super(game, "Runaway Carriage", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RunawayCarriage;
