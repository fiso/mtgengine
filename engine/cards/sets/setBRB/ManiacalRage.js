"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManiacalRage extends Card {
  constructor(game) {
    super(game, "Maniacal Rage", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ManiacalRage;
