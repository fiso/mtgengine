"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoingTruth extends Card {
  constructor(game) {
    super(game, "Echoing Truth", "Commander 2015", "C15");
  }
}

module.exports = EchoingTruth;
