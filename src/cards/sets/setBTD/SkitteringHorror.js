"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringHorror extends UnimplementedCard {
  constructor(game) {
    super(game, "Skittering Horror", "Beatdown Box Set", "BTD");
  }
}

module.exports = SkitteringHorror;
