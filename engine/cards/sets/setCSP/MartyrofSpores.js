"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrofSpores extends Card {
  constructor(game) {
    super(game, "Martyr of Spores", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofSpores;
