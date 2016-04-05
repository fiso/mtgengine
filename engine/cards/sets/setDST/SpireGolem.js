"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Spire Golem", "Darksteel", "DST");
  }
}

module.exports = SpireGolem;
