"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuildersBane extends UnimplementedCard {
  constructor(game) {
    super(game, "Builder's Bane", "Mirage", "MIR");
  }
}

module.exports = BuildersBane;
