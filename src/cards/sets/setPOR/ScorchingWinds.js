"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchingWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Scorching Winds", "Portal", "POR");
  }
}

module.exports = ScorchingWinds;
