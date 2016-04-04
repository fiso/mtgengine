"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Manabond extends Card {
  constructor(game) {
    super(game, "Manabond", "Exodus", "EXO");
  }
}

module.exports = Manabond;
