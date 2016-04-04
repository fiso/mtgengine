"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Slaughter extends Card {
  constructor(game) {
    super(game, "Slaughter", "Exodus", "EXO");
  }
}

module.exports = Slaughter;
