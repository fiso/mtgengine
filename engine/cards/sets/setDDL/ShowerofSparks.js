"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShowerofSparksBase = require("../setBRB/ShowerofSparks.js");

class ShowerofSparks extends ShowerofSparksBase {
  constructor(game) {
    super(game, "Shower of Sparks", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ShowerofSparks;
