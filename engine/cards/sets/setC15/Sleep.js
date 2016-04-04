"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sleep extends Card {
  constructor(game) {
    super(game, "Sleep", "Commander 2015", "C15");
  }
}

module.exports = Sleep;
