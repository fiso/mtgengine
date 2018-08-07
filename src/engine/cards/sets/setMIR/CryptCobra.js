"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptCobra extends UnimplementedCard {
  constructor (game) {
    super(game, "Crypt Cobra", "Mirage", "MIR");
  }
}

module.exports = CryptCobra;
