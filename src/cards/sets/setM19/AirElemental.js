"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Air Elemental", "Core Set 2019", "M19");
  }
}

module.exports = AirElemental;
