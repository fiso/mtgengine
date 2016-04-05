"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfanePrayers extends UnimplementedCard {
  constructor(game) {
    super(game, "Profane Prayers", "Onslaught", "ONS");
  }
}

module.exports = ProfanePrayers;
