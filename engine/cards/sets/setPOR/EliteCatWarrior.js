"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EliteCatWarriorBase = require("../setME4/EliteCatWarrior.js");

class EliteCatWarrior extends EliteCatWarriorBase {
  constructor(game) {
    super(game, "Elite Cat Warrior", "Portal", "POR");
  }
}

module.exports = EliteCatWarrior;
