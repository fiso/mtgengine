"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DolmenGate extends Card {
  constructor(game) {
    super(game, "Dolmen Gate", "Lorwyn", "LRW");
  }
}

module.exports = DolmenGate;
