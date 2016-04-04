"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LaccolithWarrior extends Card {
  constructor(game) {
    super(game, "Laccolith Warrior", "Nemesis", "NMS");
  }
}

module.exports = LaccolithWarrior;
