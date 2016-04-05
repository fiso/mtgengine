"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormwatchEagle extends UnimplementedCard {
  constructor(game) {
    super(game, "Stormwatch Eagle", "Prophecy", "PCY");
  }
}

module.exports = StormwatchEagle;
