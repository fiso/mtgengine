"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Wave", "Tempest Remastered", "TPR");
  }
}

module.exports = FlameWave;
