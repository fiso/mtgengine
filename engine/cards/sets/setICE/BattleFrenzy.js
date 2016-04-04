"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleFrenzy extends Card {
  constructor(game) {
    super(game, "Battle Frenzy", "Ice Age", "ICE");
  }
}

module.exports = BattleFrenzy;
