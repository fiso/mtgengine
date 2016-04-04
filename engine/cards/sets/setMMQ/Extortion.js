"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Extortion extends Card {
  constructor(game) {
    super(game, "Extortion", "Mercadian Masques", "MMQ");
  }
}

module.exports = Extortion;
