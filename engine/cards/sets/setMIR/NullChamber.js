"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullChamber extends Card {
  constructor(game) {
    super(game, "Null Chamber", "Mirage", "MIR");
  }
}

module.exports = NullChamber;
