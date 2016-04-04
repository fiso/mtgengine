"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KirdApe extends Card {
  constructor(game) {
    super(game, "Kird Ape", "Arabian Nights", "ARN");
  }
}

module.exports = KirdApe;
