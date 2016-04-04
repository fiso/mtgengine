"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ButcherOrgg extends Card {
  constructor(game) {
    super(game, "Butcher Orgg", "Onslaught", "ONS");
  }
}

module.exports = ButcherOrgg;
