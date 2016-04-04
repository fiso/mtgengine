"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheWild extends Card {
  constructor(game) {
    super(game, "Patron of the Wild", "Legions", "LGN");
  }
}

module.exports = PatronoftheWild;
