"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonloftIdol extends Card {
  constructor(game) {
    super(game, "Dragonloft Idol", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonloftIdol;
