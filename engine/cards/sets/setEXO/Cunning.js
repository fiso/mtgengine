"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cunning extends Card {
  constructor(game) {
    super(game, "Cunning", "Exodus", "EXO");
  }
}

module.exports = Cunning;
