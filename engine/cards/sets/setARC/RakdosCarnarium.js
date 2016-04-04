"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdosCarnarium extends Card {
  constructor(game) {
    super(game, "Rakdos Carnarium", "Archenemy", "ARC");
  }
}

module.exports = RakdosCarnarium;
