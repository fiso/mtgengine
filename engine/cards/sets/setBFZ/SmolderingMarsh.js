"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingMarsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Smoldering Marsh", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SmolderingMarsh;
