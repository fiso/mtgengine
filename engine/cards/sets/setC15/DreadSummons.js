"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadSummons extends Card {
  constructor(game) {
    super(game, "Dread Summons", "Commander 2015", "C15");
  }
}

module.exports = DreadSummons;
