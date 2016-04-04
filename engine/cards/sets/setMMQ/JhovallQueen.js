"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhovallQueen extends Card {
  constructor(game) {
    super(game, "Jhovall Queen", "Mercadian Masques", "MMQ");
  }
}

module.exports = JhovallQueen;
