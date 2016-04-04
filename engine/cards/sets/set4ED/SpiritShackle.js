"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritShackle extends Card {
  constructor(game) {
    super(game, "Spirit Shackle", "Fourth Edition", "4ED");
  }
}

module.exports = SpiritShackle;
