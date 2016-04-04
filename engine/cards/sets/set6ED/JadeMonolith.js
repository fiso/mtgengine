"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JadeMonolith extends Card {
  constructor(game) {
    super(game, "Jade Monolith", "Classic Sixth Edition", "6ED");
  }
}

module.exports = JadeMonolith;
