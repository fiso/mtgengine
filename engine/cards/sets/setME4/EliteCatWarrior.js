"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteCatWarrior extends Card {
  constructor(game) {
    super(game, "Elite Cat Warrior", "Masters Edition IV", "ME4");
  }
}

module.exports = EliteCatWarrior;
