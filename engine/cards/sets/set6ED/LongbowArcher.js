"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LongbowArcher extends Card {
  constructor(game) {
    super(game, "Longbow Archer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LongbowArcher;
