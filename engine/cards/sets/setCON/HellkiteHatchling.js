"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellkiteHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellkite Hatchling", "Conflux", "CON");
  }
}

module.exports = HellkiteHatchling;
