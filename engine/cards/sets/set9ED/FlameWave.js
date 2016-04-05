"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameWave extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame Wave", "Ninth Edition", "9ED");
  }
}

module.exports = FlameWave;
