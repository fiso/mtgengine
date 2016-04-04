"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unburden extends Card {
  constructor(game) {
    super(game, "Unburden", "Scourge", "SCG");
  }
}

module.exports = Unburden;
