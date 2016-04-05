"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelfInflictedWound extends UnimplementedCard {
  constructor(game) {
    super(game, "Self-Inflicted Wound", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SelfInflictedWound;
