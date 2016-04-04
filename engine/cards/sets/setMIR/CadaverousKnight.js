"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CadaverousKnight extends Card {
  constructor(game) {
    super(game, "Cadaverous Knight", "Mirage", "MIR");
  }
}

module.exports = CadaverousKnight;
