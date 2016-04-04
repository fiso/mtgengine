"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Demolish extends Card {
  constructor(game) {
    super(game, "Demolish", "Avacyn Restored", "AVR");
  }
}

module.exports = Demolish;
