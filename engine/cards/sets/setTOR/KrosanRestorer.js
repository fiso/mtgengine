"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanRestorer extends Card {
  constructor(game) {
    super(game, "Krosan Restorer", "Torment", "TOR");
  }
}

module.exports = KrosanRestorer;
