"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aggravate extends Card {
  constructor(game) {
    super(game, "Aggravate", "Avacyn Restored", "AVR");
  }
}

module.exports = Aggravate;
