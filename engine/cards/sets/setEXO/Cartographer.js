"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cartographer extends Card {
  constructor(game) {
    super(game, "Cartographer", "Exodus", "EXO");
  }
}

module.exports = Cartographer;
