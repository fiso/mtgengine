"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruWarchief extends Card {
  constructor(game) {
    super(game, "Daru Warchief", "Scourge", "SCG");
  }
}

module.exports = DaruWarchief;
