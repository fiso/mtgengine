"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MangarasTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Mangara's Tome", "Mirage", "MIR");
  }
}

module.exports = MangarasTome;
