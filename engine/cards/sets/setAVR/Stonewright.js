"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stonewright extends Card {
  constructor(game) {
    super(game, "Stonewright", "Avacyn Restored", "AVR");
  }
}

module.exports = Stonewright;
