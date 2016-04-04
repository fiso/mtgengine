"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Balance extends Card {
  constructor(game) {
    super(game, "Balance", "Collector's Edition", "CED");
  }
}

module.exports = Balance;
