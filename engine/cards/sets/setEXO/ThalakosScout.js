"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThalakosScout extends Card {
  constructor(game) {
    super(game, "Thalakos Scout", "Exodus", "EXO");
  }
}

module.exports = ThalakosScout;
