"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DamnablePact extends Card {
  constructor(game) {
    super(game, "Damnable Pact", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DamnablePact;
