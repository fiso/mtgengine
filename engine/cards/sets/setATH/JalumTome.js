"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JalumTome extends Card {
  constructor(game) {
    super(game, "Jalum Tome", "Anthologies", "ATH");
  }
}

module.exports = JalumTome;
