"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowlingMine extends Card {
  constructor(game) {
    super(game, "Howling Mine", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HowlingMine;
