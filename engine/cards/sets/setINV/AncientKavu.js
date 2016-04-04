"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Kavu", "Invasion", "INV");
  }
}

module.exports = AncientKavu;
