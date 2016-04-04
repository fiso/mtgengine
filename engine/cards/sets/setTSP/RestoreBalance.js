"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestoreBalance extends Card {
  constructor(game) {
    super(game, "Restore Balance", "Time Spiral", "TSP");
  }
}

module.exports = RestoreBalance;
