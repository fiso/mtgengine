"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FateForetold extends Card {
  constructor(game) {
    super(game, "Fate Foretold", "Theros", "THS");
  }
}

module.exports = FateForetold;
