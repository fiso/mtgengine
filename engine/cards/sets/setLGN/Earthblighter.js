"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthblighter extends Card {
  constructor(game) {
    super(game, "Earthblighter", "Legions", "LGN");
  }
}

module.exports = Earthblighter;
