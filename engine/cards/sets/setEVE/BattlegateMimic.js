"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlegateMimic extends Card {
  constructor(game) {
    super(game, "Battlegate Mimic", "Eventide", "EVE");
  }
}

module.exports = BattlegateMimic;
