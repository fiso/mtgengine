"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherChaser extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Chaser", "Aether Revolt", "AER");
  }
}

module.exports = AetherChaser;
