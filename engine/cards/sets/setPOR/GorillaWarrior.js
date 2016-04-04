"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GorillaWarriorBase = require("../setBRB/GorillaWarrior.js");

class GorillaWarrior extends GorillaWarriorBase {
  constructor(game) {
    super(game, "Gorilla Warrior", "Portal", "POR");
  }
}

module.exports = GorillaWarrior;
