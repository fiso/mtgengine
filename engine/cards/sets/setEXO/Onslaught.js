"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Onslaught extends Card {
  constructor(game) {
    super(game, "Onslaught", "Exodus", "EXO");
  }
}

module.exports = Onslaught;
