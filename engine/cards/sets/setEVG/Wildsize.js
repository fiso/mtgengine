"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildsizeBase = require("../setDD3_EVG/Wildsize.js");

class Wildsize extends WildsizeBase {
  constructor(game) {
    super(game, "Wildsize", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Wildsize;
