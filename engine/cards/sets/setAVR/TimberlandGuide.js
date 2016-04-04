"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimberlandGuide extends Card {
  constructor(game) {
    super(game, "Timberland Guide", "Avacyn Restored", "AVR");
  }
}

module.exports = TimberlandGuide;
