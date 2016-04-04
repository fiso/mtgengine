"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedWood extends Card {
  constructor(game) {
    super(game, "Tainted Wood", "Commander 2015", "C15");
  }
}

module.exports = TaintedWood;
