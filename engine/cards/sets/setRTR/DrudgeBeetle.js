"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrudgeBeetle extends Card {
  constructor(game) {
    super(game, "Drudge Beetle", "Return to Ravnica", "RTR");
  }
}

module.exports = DrudgeBeetle;
