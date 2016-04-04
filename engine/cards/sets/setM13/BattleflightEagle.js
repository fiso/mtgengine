"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleflightEagle extends Card {
  constructor(game) {
    super(game, "Battleflight Eagle", "Magic 2013", "M13");
  }
}

module.exports = BattleflightEagle;
