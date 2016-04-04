"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedPeak extends Card {
  constructor(game) {
    super(game, "Tainted Peak", "Torment", "TOR");
  }
}

module.exports = TaintedPeak;
