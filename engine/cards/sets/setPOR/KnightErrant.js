"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightErrant extends Card {
  constructor(game) {
    super(game, "Knight Errant", "Portal", "POR");
  }
}

module.exports = KnightErrant;
