"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PantherWarriorsBase = require("../set6ED/PantherWarriors.js");

class PantherWarriors extends PantherWarriorsBase {
  constructor(game) {
    super(game, "Panther Warriors", "Portal", "POR");
  }
}

module.exports = PantherWarriors;
