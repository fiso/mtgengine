"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlleyGrifters extends Card {
  constructor(game) {
    super(game, "Alley Grifters", "Mercadian Masques", "MMQ");
  }
}

module.exports = AlleyGrifters;
