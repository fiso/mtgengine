"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GateSmasher extends Card {
  constructor(game) {
    super(game, "Gate Smasher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GateSmasher;
