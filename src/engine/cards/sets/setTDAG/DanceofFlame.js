"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceofFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of Flame", "Defeat a God", "TDAG");
  }
}

module.exports = DanceofFlame;
