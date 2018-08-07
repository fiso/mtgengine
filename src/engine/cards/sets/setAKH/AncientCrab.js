"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Crab", "Amonkhet", "AKH");
  }
}

module.exports = AncientCrab;
