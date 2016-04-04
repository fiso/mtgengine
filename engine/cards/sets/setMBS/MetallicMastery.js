"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetallicMastery extends UnimplementedCard {
  constructor(game) {
    super(game, "Metallic Mastery", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MetallicMastery;
