"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanTusker extends Card {
  constructor(game) {
    super(game, "Krosan Tusker", "Archenemy", "ARC");
  }
}

module.exports = KrosanTusker;
