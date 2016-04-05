"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinationGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Ruination Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RuinationGuide;
