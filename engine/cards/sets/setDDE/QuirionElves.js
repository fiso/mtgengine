"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuirionElvesBase = require("../setBTD/QuirionElves.js");

class QuirionElves extends QuirionElvesBase {
  constructor(game) {
    super(game, "Quirion Elves", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = QuirionElves;
