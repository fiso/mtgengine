"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InescapableBrute extends Card {
  constructor(game) {
    super(game, "Inescapable Brute", "Shadowmoor", "SHM");
  }
}

module.exports = InescapableBrute;
