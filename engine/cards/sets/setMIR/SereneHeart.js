"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SereneHeart extends Card {
  constructor(game) {
    super(game, "Serene Heart", "Mirage", "MIR");
  }
}

module.exports = SereneHeart;
