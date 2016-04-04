"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flux extends Card {
  constructor(game) {
    super(game, "Flux", "Portal", "POR");
  }
}

module.exports = Flux;
