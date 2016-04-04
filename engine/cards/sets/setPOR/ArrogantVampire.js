"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArrogantVampire extends Card {
  constructor(game) {
    super(game, "Arrogant Vampire", "Portal", "POR");
  }
}

module.exports = ArrogantVampire;
