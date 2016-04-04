"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MangarasTome extends Card {
  constructor(game) {
    super(game, "Mangara's Tome", "Mirage", "MIR");
  }
}

module.exports = MangarasTome;
