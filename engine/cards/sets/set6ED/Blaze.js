"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blaze extends Card {
  constructor(game) {
    super(game, "Blaze", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blaze;
