"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForerunneroftheEmpire extends UnimplementedCard {
  constructor (game) {
    super(game, "Forerunner of the Empire", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ForerunneroftheEmpire;
