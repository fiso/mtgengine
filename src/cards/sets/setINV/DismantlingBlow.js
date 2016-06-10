"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DismantlingBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Dismantling Blow", "Invasion", "INV");
  }
}

module.exports = DismantlingBlow;
