"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilmagesTrick extends UnimplementedCard {
  constructor(game) {
    super(game, "Roilmage's Trick", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RoilmagesTrick;
