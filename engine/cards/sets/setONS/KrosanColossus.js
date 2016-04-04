"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanColossus extends Card {
  constructor(game) {
    super(game, "Krosan Colossus", "Onslaught", "ONS");
  }
}

module.exports = KrosanColossus;
