"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilSpout extends UnimplementedCard {
  constructor (game) {
    super(game, "Roil Spout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RoilSpout;
