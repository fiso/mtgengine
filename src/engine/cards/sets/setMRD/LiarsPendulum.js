"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiarsPendulum extends UnimplementedCard {
  constructor (game) {
    super(game, "Liar's Pendulum", "Mirrodin", "MRD");
  }
}

module.exports = LiarsPendulum;
