"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Asceticism extends Card {
  constructor(game) {
    super(game, "Asceticism", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Asceticism;
