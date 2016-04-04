"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlefieldForge extends Card {
  constructor(game) {
    super(game, "Battlefield Forge", "Apocalypse", "APC");
  }
}

module.exports = BattlefieldForge;
