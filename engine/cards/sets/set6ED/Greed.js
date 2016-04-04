"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Greed extends Card {
  constructor(game) {
    super(game, "Greed", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Greed;
