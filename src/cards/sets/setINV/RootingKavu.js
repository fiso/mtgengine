"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootingKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Rooting Kavu", "Invasion", "INV");
  }
}

module.exports = RootingKavu;
