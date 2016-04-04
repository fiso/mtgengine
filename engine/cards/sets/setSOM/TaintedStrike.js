"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedStrike extends Card {
  constructor(game) {
    super(game, "Tainted Strike", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TaintedStrike;
