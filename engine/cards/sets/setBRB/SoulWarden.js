"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulWarden extends Card {
  constructor(game) {
    super(game, "Soul Warden", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SoulWarden;
