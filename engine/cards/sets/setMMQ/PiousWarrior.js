"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiousWarrior extends Card {
  constructor(game) {
    super(game, "Pious Warrior", "Mercadian Masques", "MMQ");
  }
}

module.exports = PiousWarrior;
