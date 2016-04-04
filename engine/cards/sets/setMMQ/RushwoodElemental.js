"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushwoodElemental extends Card {
  constructor(game) {
    super(game, "Rushwood Elemental", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodElemental;
