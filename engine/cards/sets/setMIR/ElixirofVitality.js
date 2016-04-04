"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElixirofVitality extends Card {
  constructor(game) {
    super(game, "Elixir of Vitality", "Mirage", "MIR");
  }
}

module.exports = ElixirofVitality;
