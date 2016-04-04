"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lunge extends Card {
  constructor(game) {
    super(game, "Lunge", "Mercadian Masques", "MMQ");
  }
}

module.exports = Lunge;
