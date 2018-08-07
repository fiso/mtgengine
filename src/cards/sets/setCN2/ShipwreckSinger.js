"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShipwreckSinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Shipwreck Singer", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ShipwreckSinger;
