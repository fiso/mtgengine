"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushwoodHerbalist extends Card {
  constructor(game) {
    super(game, "Rushwood Herbalist", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodHerbalist;
