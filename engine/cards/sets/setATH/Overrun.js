"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overrun extends Card {
  constructor(game) {
    super(game, "Overrun", "Anthologies", "ATH");
  }
}

module.exports = Overrun;
