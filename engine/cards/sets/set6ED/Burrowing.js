"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Burrowing extends Card {
  constructor(game) {
    super(game, "Burrowing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Burrowing;
