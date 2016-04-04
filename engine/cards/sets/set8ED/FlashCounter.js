"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlashCounter extends Card {
  constructor(game) {
    super(game, "Flash Counter", "Eighth Edition", "8ED");
  }
}

module.exports = FlashCounter;
