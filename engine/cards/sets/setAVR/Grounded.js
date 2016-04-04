"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grounded extends Card {
  constructor(game) {
    super(game, "Grounded", "Avacyn Restored", "AVR");
  }
}

module.exports = Grounded;
