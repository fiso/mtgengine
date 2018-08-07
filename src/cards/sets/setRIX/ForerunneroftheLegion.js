"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForerunneroftheLegion extends UnimplementedCard {
  constructor (game) {
    super(game, "Forerunner of the Legion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ForerunneroftheLegion;
