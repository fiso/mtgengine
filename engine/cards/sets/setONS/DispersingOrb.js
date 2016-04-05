"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispersingOrb extends UnimplementedCard {
  constructor(game) {
    super(game, "Dispersing Orb", "Onslaught", "ONS");
  }
}

module.exports = DispersingOrb;
