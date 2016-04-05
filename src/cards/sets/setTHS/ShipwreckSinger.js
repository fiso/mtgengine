"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShipwreckSinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Shipwreck Singer", "Theros", "THS");
  }
}

module.exports = ShipwreckSinger;
