"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViashinoRacketeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Viashino Racketeer", "Return to Ravnica", "RTR");
  }
}

module.exports = ViashinoRacketeer;
