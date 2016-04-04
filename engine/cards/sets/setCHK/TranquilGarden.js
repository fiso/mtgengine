"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TranquilGarden extends Card {
  constructor(game) {
    super(game, "Tranquil Garden", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TranquilGarden;
