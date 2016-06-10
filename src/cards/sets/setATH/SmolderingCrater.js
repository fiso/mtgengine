"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingCrater extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Crater", "Anthologies", "ATH");
  }
}

module.exports = SmolderingCrater;
