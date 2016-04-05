"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SereneSteward extends UnimplementedCard {
  constructor(game) {
    super(game, "Serene Steward", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SereneSteward;
