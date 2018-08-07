"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeclareDominance extends UnimplementedCard {
  constructor (game) {
    super(game, "Declare Dominance", "Core Set 2019", "M19");
  }
}

module.exports = DeclareDominance;
