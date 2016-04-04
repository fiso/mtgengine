"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamingSword extends Card {
  constructor(game) {
    super(game, "Flaming Sword", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlamingSword;
