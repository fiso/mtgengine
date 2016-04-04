"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErraticPortal extends Card {
  constructor(game) {
    super(game, "Erratic Portal", "Exodus", "EXO");
  }
}

module.exports = ErraticPortal;
