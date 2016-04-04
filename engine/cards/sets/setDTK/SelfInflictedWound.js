"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelfInflictedWound extends Card {
  constructor(game) {
    super(game, "Self-Inflicted Wound", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SelfInflictedWound;
