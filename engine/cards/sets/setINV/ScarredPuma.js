"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarredPuma extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarred Puma", "Invasion", "INV");
  }
}

module.exports = ScarredPuma;
