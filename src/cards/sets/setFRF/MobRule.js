"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MobRule extends UnimplementedCard {
  constructor (game) {
    super(game, "Mob Rule", "Fate Reforged", "FRF");
  }
}

module.exports = MobRule;
