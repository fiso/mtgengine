"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PutridWarrior extends Card {
  constructor(game) {
    super(game, "Putrid Warrior", "Apocalypse", "APC");
  }
}

module.exports = PutridWarrior;
