"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingCrater extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Crater", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SmolderingCrater;
