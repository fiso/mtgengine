"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chainflinger extends Card {
  constructor(game) {
    super(game, "Chainflinger", "Odyssey", "ODY");
  }
}

module.exports = Chainflinger;
