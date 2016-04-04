"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodbondVampire extends Card {
  constructor(game) {
    super(game, "Bloodbond Vampire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BloodbondVampire;
