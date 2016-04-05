"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathMatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Match", "Onslaught", "ONS");
  }
}

module.exports = DeathMatch;
