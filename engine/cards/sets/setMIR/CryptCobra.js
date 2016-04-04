"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptCobra extends Card {
  constructor(game) {
    super(game, "Crypt Cobra", "Mirage", "MIR");
  }
}

module.exports = CryptCobra;
