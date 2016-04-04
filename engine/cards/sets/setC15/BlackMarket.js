"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackMarket extends Card {
  constructor(game) {
    super(game, "Black Market", "Commander 2015", "C15");
  }
}

module.exports = BlackMarket;
