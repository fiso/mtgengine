"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForkintheRoad extends UnimplementedCard {
  constructor (game) {
    super(game, "Fork in the Road", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForkintheRoad;
