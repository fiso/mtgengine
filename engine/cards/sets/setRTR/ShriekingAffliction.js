"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingAffliction extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrieking Affliction", "Return to Ravnica", "RTR");
  }
}

module.exports = ShriekingAffliction;
