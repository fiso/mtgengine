"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedSpecter extends Card {
  constructor(game) {
    super(game, "Tainted Specter", "Mirage", "MIR");
  }
}

module.exports = TaintedSpecter;
