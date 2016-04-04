"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CobraTrap extends Card {
  constructor(game) {
    super(game, "Cobra Trap", "Commander 2015", "C15");
  }
}

module.exports = CobraTrap;
