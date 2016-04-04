"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pandemonium extends Card {
  constructor(game) {
    super(game, "Pandemonium", "Exodus", "EXO");
  }
}

module.exports = Pandemonium;
