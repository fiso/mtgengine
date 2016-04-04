"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanVampire extends Card {
  constructor(game) {
    super(game, "Krovikan Vampire", "Ice Age", "ICE");
  }
}

module.exports = KrovikanVampire;
