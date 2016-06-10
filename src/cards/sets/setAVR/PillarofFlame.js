"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PillarofFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Pillar of Flame", "Avacyn Restored", "AVR");
  }
}

module.exports = PillarofFlame;
