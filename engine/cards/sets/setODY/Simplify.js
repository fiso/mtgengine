"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Simplify extends Card {
  constructor(game) {
    super(game, "Simplify", "Odyssey", "ODY");
  }
}

module.exports = Simplify;
