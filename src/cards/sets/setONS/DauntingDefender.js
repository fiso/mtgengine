"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntingDefender extends UnimplementedCard {
  constructor(game) {
    super(game, "Daunting Defender", "Onslaught", "ONS");
  }
}

module.exports = DauntingDefender;
