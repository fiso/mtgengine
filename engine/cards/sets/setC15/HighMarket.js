"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighMarket extends Card {
  constructor(game) {
    super(game, "High Market", "Commander 2015", "C15");
  }
}

module.exports = HighMarket;
