"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonkIdealist extends Card {
  constructor(game) {
    super(game, "Monk Idealist", "Commander 2015", "C15");
  }
}

module.exports = MonkIdealist;
