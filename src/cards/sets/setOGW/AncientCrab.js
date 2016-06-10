"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Crab", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AncientCrab;
