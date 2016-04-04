"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageThallid extends Card {
  constructor(game) {
    super(game, "Savage Thallid", "Time Spiral", "TSP");
  }
}

module.exports = SavageThallid;
