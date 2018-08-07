"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoodedKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooded Kavu", "Invasion", "INV");
  }
}

module.exports = HoodedKavu;
