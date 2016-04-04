"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MobRule extends Card {
  constructor(game) {
    super(game, "Mob Rule", "Fate Reforged", "FRF");
  }
}

module.exports = MobRule;
