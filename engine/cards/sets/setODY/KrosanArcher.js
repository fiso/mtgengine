"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanArcher extends Card {
  constructor(game) {
    super(game, "Krosan Archer", "Odyssey", "ODY");
  }
}

module.exports = KrosanArcher;
