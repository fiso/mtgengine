"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BolaWarrior extends Card {
  constructor(game) {
    super(game, "Bola Warrior", "Nemesis", "NMS");
  }
}

module.exports = BolaWarrior;
