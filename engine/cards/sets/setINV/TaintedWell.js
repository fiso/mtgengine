"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedWell extends Card {
  constructor(game) {
    super(game, "Tainted Well", "Invasion", "INV");
  }
}

module.exports = TaintedWell;
