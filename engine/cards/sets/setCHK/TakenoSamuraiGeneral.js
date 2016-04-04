"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TakenoSamuraiGeneral extends Card {
  constructor(game) {
    super(game, "Takeno, Samurai General", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TakenoSamuraiGeneral;
