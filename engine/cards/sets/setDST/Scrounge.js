"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scrounge extends Card {
  constructor(game) {
    super(game, "Scrounge", "Darksteel", "DST");
  }
}

module.exports = Scrounge;
