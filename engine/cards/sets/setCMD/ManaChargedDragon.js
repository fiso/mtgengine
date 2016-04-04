"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaChargedDragon extends Card {
  constructor(game) {
    super(game, "Mana-Charged Dragon", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ManaChargedDragon;
