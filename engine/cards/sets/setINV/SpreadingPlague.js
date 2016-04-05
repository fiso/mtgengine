"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadingPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Spreading Plague", "Invasion", "INV");
  }
}

module.exports = SpreadingPlague;
