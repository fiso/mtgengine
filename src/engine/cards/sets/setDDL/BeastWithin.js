"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setBBD/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor (game) {
    super(game, "Beast Within", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BeastWithin;
