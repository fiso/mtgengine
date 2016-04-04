"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Edgewalker extends Card {
  constructor(game) {
    super(game, "Edgewalker", "Scourge", "SCG");
  }
}

module.exports = Edgewalker;
